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
  /** 本文ブロック（未設定時は detail 側で簡易リードを表示） */
  body?: NewsBlock[];
}

const articles: NewsArticle[] = [
  {
    id: 1,
    date: "2026.05.20",
    category: "プレスリリース",
    title: "AI契約書解析機能の提供を開始しました",
    body: [
      {
        type: "p",
        text: "Innovation Style株式会社（本社：東京都港区、代表取締役：冨野 公平）は、システム開発で培った技術力を活かし、契約書の作成・確認を効率化する「AI契約書解析機能」の提供を本日より開始いたしました。",
      },
      { type: "h2", text: "機能の概要" },
      {
        type: "p",
        text: "本機能は、これまで手作業で行っていた契約書のレビュー業務を支援するものです。アップロードされた契約書をAIが解析し、重要条項の抽出やリスクのある記載の検知、過去のひな形との差分表示までをワンストップで行います。既存の顧客管理システムとの連携により、契約の進捗をリアルタイムで把握することも可能です。",
      },
      { type: "h2", text: "導入によるメリット" },
      {
        type: "checks",
        items: [
          "契約書レビューにかかる時間を大幅に削減",
          "確認漏れ・入力ミスを防止し、品質を均一化",
          "顧客管理システムと連携し、進捗を一元管理",
        ],
      },
      { type: "h2", text: "今後の展望" },
      {
        type: "p",
        text: "当社は今後も、システム開発とデジタルマーケティングの両領域で培った知見を組み合わせ、お客様のDX推進を支援してまいります。本機能に関するお問い合わせ・導入のご相談は、お問い合わせフォームよりお気軽にご連絡ください。",
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
    date: "2026.01.15",
    category: "実績",
    title: "D2Cコスメブランドの新規顧客獲得145%増を達成しました",
    body: [
      {
        type: "p",
        text: "広告運用の最適化とシステム改善を組み合わせた支援により、D2Cコスメブランドの新規顧客獲得数145%増を達成しました。データ分析に基づく施策で広告費を抑えつつ、売上を大幅に向上させています。詳細はマーケティング実績ページをご覧ください。",
      },
    ],
  },

  {
    id: 4,
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
    id: 5,
    date: "2025.06.18",
    category: "プレスリリース",
    title: "マーケティング効果測定ダッシュボードのβ版を公開しました",
    body: [
      {
        type: "p",
        text: "複数の広告媒体とウェブサイトのデータを一元管理し、リアルタイムで効果測定できるダッシュボードのβ版を公開しました。データに基づいた迅速な意思決定を支援します。",
      },
    ],
  },
  {
    id: 6,
    date: "2025.03.03",
    category: "実績",
    title: "不動産投資企業のリード送客で18ヶ月連続目標達成を支援しました",
    body: [
      {
        type: "p",
        text: "システム連携と広告運用を組み合わせた支援により、不動産投資企業のリード送客で18ヶ月連続の目標達成を実現しました。データを活用した精緻な広告配信が成果につながっています。",
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
