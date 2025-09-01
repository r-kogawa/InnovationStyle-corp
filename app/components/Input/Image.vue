<template>
  <div class="flex flex-col gap-2 items-center">
    <div
      v-if="image_url == ''"
      class="border-2 border-gray-400 border-dotted w-full text-center px-20 py-24 text-gray-500"
    >
      選択した画像が表示されます
    </div>
    <img
      v-else
      :src="image_url"
      :alt="props.title"
      class="w-full object-cover border border-gray-100"
    />
    <label
      class="flex items-center justify-center p-2 cursor-pointer text-canter bg-gray-200 hover:bg-gray-300 duration-100 w-full"
      :class="{
        'border border-gray-300': props.border,
        rounded: props.rounded,
      }"
    >
      <input
        type="file"
        class="hidden"
        :name="name"
        :disabled="disabled"
        @change="onChange"
        @click="(e) => (e.target as HTMLInputElement).value = ''"
      />
      <span class="text-center font-medium text-sm">
        {{ title }}
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  rounded?: boolean;
  disabled?: boolean;
  name?: string;
  border?: boolean;
}

const props = defineProps<Props>();
const model = defineModel<string>();
// const emit = defineEmits(["on-change"]);

const { onToast } = useToast();
const image_url = ref<string>("");

onMounted(() => {
  image_url.value = model.value ? model.value : "";
});

const convertToBase64 = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const onChange = async (e: Event) => {
  const file = (e.target as HTMLInputElement).files![0];
  // const size = file!.size;
  const type = file!.type;

  if (!type.includes("image")) {
    onToast("error", "JPEG・PNGなどの画像ファイルを選択してください");
    return;
  }
  image_url.value = await convertToBase64(file);

  const reader = new FileReader();
  reader.onload = (e) => {
    const arrayBuffer = new Uint8Array(reader.result as ArrayBuffer);

    const base64String = btoa(
      arrayBuffer.reduce((p, c) => {
        return p + String.fromCharCode(c);
      }, "")
    );
    model.value = base64String;
  };
  reader.readAsArrayBuffer(file);
};
</script>
