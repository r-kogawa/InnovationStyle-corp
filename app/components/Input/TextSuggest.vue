<template>
  <div class="relative">
    <label>
      <p class="text-gray-700 font-medium text-sm">
        <span>
          {{ title }}
        </span>
        <span
          v-if="required"
          class="text-red-500"
        >
          *
        </span>
      </p>
      <div class="relative">
        <input
          v-model="searchQuery"
          :name="name"
          :required="required"
          :placeholder="placeholder"
          type="text"
          :disabled="disabled"
          class="w-full border border-gray-300 rounded px-2 py-1 mt-2 focus:outline-red-200 focus:border-blue-500"
          :class="[
            disabled ? 'bg-gray-200' : '',
            error != '' ? 'bg-red-200' : '',
            showSuggestions ? 'rounded-b-none border-b-0' : '',
          ]"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput"
          @keydown="handleKeydown"
        />

        <!-- サジェスト候補リスト -->
        <div
          v-if="showSuggestions && filteredSuggestions.length > 0"
          class="absolute z-50 w-full bg-white border border-gray-300 border-t-0 rounded-b-lg shadow-lg max-h-32 overflow-y-auto"
        >
          <div
            v-for="(suggestion, index) in filteredSuggestions"
            :key="index"
            class="px-3 py-2 cursor-pointer hover:bg-gray-100 transition-colors duration-150"
            :class="{
              'bg-blue-100': index === selectedIndex,
            }"
            @mousedown="selectSuggestion(suggestion)"
            @mouseenter="selectedIndex = index"
          >
            <div class="flex items-center">
              <span class="flex-1">{{ getSuggestionText(suggestion) }}</span>
              <svg
                v-if="getSuggestionText(suggestion) === searchQuery"
                class="w-4 h-4 text-blue-600 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- 候補が見つからない場合 -->
        <div
          v-else-if="
            showSuggestions && searchQuery && filteredSuggestions.length === 0
          "
          class="absolute z-50 w-full bg-white border border-gray-300 border-t-0 rounded-b-lg shadow-lg"
        >
          <div class="px-3 py-2 text-gray-500 text-sm">
            {{ noResultsText }}
          </div>
        </div>

        <!-- 検索アイコン -->
        <div
          class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <p
        v-if="error != ''"
        class="text-red-500 text-sm mt-1"
        name="error"
      >
        {{ error }}
      </p>

      <!-- ヘルプテキスト -->
      <p
        v-if="helpText"
        class="text-gray-500 text-xs mt-1"
      >
        {{ helpText }}
      </p>
    </label>
  </div>
</template>

<script setup lang="ts">
interface Suggestion {
  value: string | number;
  text: string;
  [key: string]: any;
}

interface Props {
  title: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  suggestions?: (string | Suggestion)[];
  minLength?: number;
  maxSuggestions?: number;
  noResultsText?: string;
  helpText?: string;
  caseSensitive?: boolean;
}

interface Emits {
  (e: "is-validation", error: boolean): void;
  (e: "select", suggestion: string | Suggestion): void;
}

const emit = defineEmits<Emits>();
const props = withDefaults(defineProps<Props>(), {
  suggestions: () => [],
  minLength: 1,
  maxSuggestions: 10,
  noResultsText: "該当する候補が見つかりません",
  caseSensitive: false,
});

const model = defineModel<string>();
const searchQuery = ref<string>("");
const showSuggestions = ref<boolean>(false);
const selectedIndex = ref<number>(-1);
const error = ref<string | null>(null);

// モデル値と検索クエリを同期
watch(model, (newValue) => {
  if (newValue !== searchQuery.value) {
    searchQuery.value = newValue || "";
  }
});

watch(searchQuery, (newValue) => {
  model.value = newValue;
});

// マウント時にモデル値を検索クエリに設定
onMounted(() => {
  if (model.value) {
    searchQuery.value = model.value;
  }
});

// サジェスト候補のフィルタリング
const filteredSuggestions = computed(() => {
  if (!searchQuery.value || searchQuery.value.length < props.minLength) {
    return [];
  }

  const query = props.caseSensitive
    ? searchQuery.value
    : searchQuery.value.toLowerCase();

  return props.suggestions
    .filter((suggestion) => {
      const text = getSuggestionText(suggestion);
      const searchText = props.caseSensitive ? text : text.toLowerCase();
      return searchText.includes(query);
    })
    .slice(0, props.maxSuggestions);
});

// サジェスト候補からテキストを取得
const getSuggestionText = (suggestion: string | Suggestion): string => {
  if (typeof suggestion === "string") {
    return suggestion;
  }
  return suggestion.text || suggestion.value?.toString() || "";
};

// フォーカス時の処理
const handleFocus = () => {
  showSuggestions.value = true;
  selectedIndex.value = -1;
};

// ブラー時の処理（少し遅らせてクリックイベントを処理できるようにする）
const handleBlur = () => {
  setTimeout(() => {
    showSuggestions.value = false;
    selectedIndex.value = -1;
    validateInput();
  }, 150);
};

// 入力時の処理
const handleInput = () => {
  showSuggestions.value = true;
  selectedIndex.value = -1;
};

// キーボード操作
const handleKeydown = (event: KeyboardEvent) => {
  if (!showSuggestions.value || filteredSuggestions.value.length === 0) {
    return;
  }

  switch (event.key) {
    case "ArrowDown":
      event.preventDefault();
      selectedIndex.value = Math.min(
        selectedIndex.value + 1,
        filteredSuggestions.value.length - 1
      );
      break;
    case "ArrowUp":
      event.preventDefault();
      selectedIndex.value = Math.max(selectedIndex.value - 1, -1);
      break;
    case "Enter":
      event.preventDefault();
      if (selectedIndex.value >= 0) {
        selectSuggestion(filteredSuggestions.value[selectedIndex.value]);
      }
      break;
    case "Escape":
      showSuggestions.value = false;
      selectedIndex.value = -1;
      break;
  }
};

// サジェスト候補を選択
const selectSuggestion = (suggestion: string | Suggestion) => {
  const text = getSuggestionText(suggestion);
  searchQuery.value = text;
  showSuggestions.value = false;
  selectedIndex.value = -1;
  emit("select", suggestion);
  validateInput();
};

// バリデーション
const validateInput = () => {
  if (props.required) {
    if (
      (!searchQuery.value || searchQuery.value.trim() === "") &&
      error.value !== null
    ) {
      error.value = `${props.title}は必須項目です`;
    } else {
      error.value = "";
    }
  } else {
    error.value = "";
  }
};

// エラー状態の監視
watch(error, (value) => {
  emit("is-validation", value === "" || value === null);
});

// 初期バリデーション
onMounted(() => {
  validateInput();
});
</script>
