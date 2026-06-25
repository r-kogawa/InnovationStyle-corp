/**
 * スクロールリビール用ディレクティブ `v-reveal`
 *
 * 使い方: <section class="reveal" v-reveal> ... </section>
 *  - `.reveal` クラスで初期状態（非表示）を CSS 側で定義
 *  - 画面内に入ったら `.is-visible` を付与してフェードアップ
 *  - prefers-reduced-motion 時は CSS 側で常時表示にフォールバック
 *
 * SSR でもディレクティブ自体は登録する必要があるため universal plugin とし、
 * `getSSRProps` を返すことでサーバーレンダリング時のクラッシュを防ぐ。
 * 実際の監視処理（IntersectionObserver）はクライアントでのみ動作する。
 */
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null;

  if (import.meta.client && "IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      (entries, io) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
  }

  nuxtApp.vueApp.directive("reveal", {
    // SSR ではプロパティを足さない（存在しないと getSSRProps 参照で落ちる）
    getSSRProps: () => ({}),
    mounted(el: HTMLElement) {
      if (!import.meta.client) return;
      if (!observer) {
        // IntersectionObserver 非対応環境では即表示
        el.classList.add("is-visible");
        return;
      }
      observer.observe(el);
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el);
    },
  });
});
