/**
 * お知らせ（News）のデータソース。
 * いまは静的データだが、将来 Firestore / CMS へ差し替える場合も
 * このコンポーザブルの実装だけを変更すればよい（呼び出し側は不変）。
 */
export type NewsCategory = "お知らせ" | "プレスリリース" | "実績" | "メディア";

export interface NewsBlock {
  type: "p" | "h2" | "checks";
  text?: string;
  items?: string[];
}

export interface NewsArticle {
  id: number;
  date: string;
  category: NewsCategory;
  title: string;
  /** キービジュアル画像キー（未設定時は detail 側でロゴを表示） */
  image?: string;
  /** 本文ブロック（未設定時は detail 側で簡易リードを表示） */
  body?: NewsBlock[];
}

const articles: NewsArticle[] = [
  {
    id: 1,
    date: "2026.06.12",
    category: "プレスリリース",
    title:
      "AIでLP制作から公開まで自動化するSaaS「AutoLP」の無料βテストを開始しました",
    image: "autolp",
    body: [
      {
        type: "p",
        text: "Innovation Style株式会社（本社：東京都港区、代表取締役：冨野 公平）は、チャットでの会話だけでランディングページ（LP）の生成・編集・公開までを行えるAI SaaS「AutoLP（オートエルピー）」の無料βテストを本日より開始いたしました。",
      },
      { type: "h2", text: "「AutoLP」とは" },
      {
        type: "p",
        text: "「AutoLP」は、専門的な知識やデザインスキルがなくても、チャットでの会話だけでランディングページを制作・公開できるAI SaaSです。リサーチから初稿の作成、修正、フォーム設置、公開、効果計測までを一気通貫で支援し、これまで制作会社への依頼や専用ツールの習得が必要だったLP制作のハードルを大きく下げます。",
      },
      { type: "h2", text: "βテストの特徴" },
      {
        type: "checks",
        items: [
          "全機能を期間中無制限でご利用いただけます",
          "AI利用料を10万円分まで無料でご提供します",
          "専用URL（サブドメイン）から独自ドメインでの公開まで対応します",
        ],
      },
      { type: "h2", text: "主な機能" },
      {
        type: "checks",
        items: [
          "チャット入力だけでリサーチから初稿完成まで自動で実行",
          "クリックで選択しテキストで指示することで、該当箇所のみをピンポイントに修正",
          "フォーム設置・公開・効果計測までをワンストップで提供",
        ],
      },
      { type: "h2", text: "βテストへの参加方法と今後の展望" },
      {
        type: "p",
        text: "βテストへは、サービスサイト（https://auto-landing.com/）よりアカウント登録いただくことでご参加いただけます。当社は今後も、システム開発とデジタルマーケティングの両領域で培った知見を活かし、お客様のマーケティング活動とDX推進を支援してまいります。本件に関するお問い合わせは、お問い合わせフォームよりお気軽にご連絡ください。",
      },
    ],
  },
  {
    id: 2,
    date: "2026.03.10",
    category: "お知らせ",
    title: "ゴールデンウィーク期間中の営業についてのお知らせ",
    body: [
      {
        type: "p",
        text: "誠に勝手ながら、ゴールデンウィーク期間中の営業についてお知らせいたします。期間中にいただいたお問い合わせにつきましては、休業明けより順次対応させていただきます。ご不便をおかけいたしますが、何卒よろしくお願い申し上げます。",
      },
    ],
  },

  {
    id: 3,
    date: "2025.09.01",
    category: "お知らせ",
    title: "コーポレートサイトをリニューアルしました",
    body: [
      {
        type: "p",
        text: "この度、コーポレートサイトを全面リニューアルいたしました。事業内容や実績をより分かりやすくお伝えできるよう構成を見直しています。今後ともInnovation Styleをよろしくお願いいたします。",
      },
    ],
  },
  {
    id: 4,
    date: "2025.06.18",
    category: "プレスリリース",
    title: "マーケティング効果測定ダッシュボードのβ版を公開しました",
    image: "comparlytics",
    body: [
      {
        type: "p",
        text: "複数の広告媒体とウェブサイトのデータを一元管理し、リアルタイムで効果測定できるダッシュボードのβ版を公開しました。データに基づいた迅速な意思決定を支援します。",
      },
    ],
  },
];

const categoryChipMap: Record<NewsCategory, string> = {
  お知らせ: "text-accent border border-accent/20 bg-accent/5",
  プレスリリース: "text-ink border border-ink/20 bg-ink/5",
  実績: "text-steel border border-steel/20 bg-steel/5",
  メディア:
    "text-accent-bright border border-accent-bright/20 bg-accent-bright/5",
};

/** カテゴリチップの配色クラス */
export const newsChipClass = (category: NewsCategory): string =>
  categoryChipMap[category];

export const useNews = () => {
  const categories: ("ALL" | NewsCategory)[] = [
    "ALL",
    "お知らせ",
    "プレスリリース",
    "実績",
    "メディア",
  ];
  const getById = (id: number): NewsArticle | undefined =>
    articles.find((a) => a.id === id);

  return { articles, categories, getById };
};
