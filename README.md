# Career Summit 2026 Landing Page

「Career Summit 2026」のランディングページプロジェクトです。
京阪神の大学生（28卒）を対象としたキャリアイベントの告知・集客を目的としています。

## 🛠 技術スタック

このプロジェクトは以下の技術で構築されています。

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Component**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Carousel/Slider**: [Embla Carousel](https://www.embla-carousel.com/)

## 🚀 開発環境のセットアップ

### 前提条件
- Node.js (推奨: v18以上)
- npm

### インストール手順

# 1. リポジトリのクローン
git clone <YOUR_GIT_URL>

# 2. ディレクトリへ移動
cd career-summit-landing

# 3. 依存関係のインストール
npm install

# 4. 開発サーバーの起動
npm run dev

### ビルドとデプロイ

# ビルド（distフォルダが生成されます）
npm run build

# ESLintによるチェック
npm run lint


GitHubへプッシュすると、連携されているホスティングサービス（Cloudflare Pages等）へ自動デプロイされます。

## 📂 プロジェクト構成

主要なディレクトリとファイルの構成です。

src/
├── components/
│   ├── ui/                 # shadcn/uiの基本コンポーネント (Button, Carousel, etc.)
│   ├── BenefitsSection.tsx # 参加者特典 (無限スクロールスライダー含む)
│   ├── CompaniesSection.tsx# 出展企業一覧
│   ├── CompanyInfoCard.tsx # 運営会社情報カード (PC/SPで配置が変わります)
│   ├── HeroSection.tsx     # ファーストビュー (画像スライダー)
│   ├── MobileMenu.tsx      # スマホ用ハンバーガーメニュー
│   ├── StickyFooter.tsx    # スマホ用追従ボタン
│   └── ... (その他のセクション)
├── pages/
│   └── Index.tsx           # メインページ (レイアウト統合・スクロール監視)
└── public/                 # 静的画像ファイル (ロゴ, 写真など)

```

## 💡 主要機能と実装ポイント

### 1. 3カラムレイアウト (PC表示)

`src/pages/Index.tsx` にて実装されています。

* **左カラム**: ロゴ・運営情報 (Sticky配置)
* **中央カラム**: メインコンテンツ (スクロールエリア)
* **右カラム**: ナビゲーション・CVボタン (Sticky配置)

> **注意点**: 左カラムの `CompanyInfoCard` は、右カラムの「キャンペーン実施中」ボタンの底辺と位置が合うように、`min-h` と `translate-y` で高さ調整を行っています。

### 2. カルーセル・スライダーの実装

以下のプラグインを使用しています。依存関係エラーが出た場合は `npm install` を確認してください。

* **HeroSection**: `embla-carousel-autoplay` を使用し、自動で切り替わるスライドショー。
* **BenefitsSection**: `embla-carousel-auto-scroll` を使用し、回転寿司のように常に流れ続ける無限スクロール仕様。

### 3. レスポンシブ対応

* **Tailwindのブレークポイント**: `lg:` (1024px) を境界に、PC/スマホのレイアウトを切り替えています。
* **スマホメニュー**: `MobileMenu.tsx` がオーバーレイで表示されます。
* **運営情報カード**: PCでは左サイドバー下部、スマホではフッター直前のメインコンテンツ内に表示されます。

### 4. スクロール連動ナビゲーション

`IntersectionObserver` を使用し、現在表示されているセクションに応じて右サイドバーのメニューがハイライトされる仕組みになっています。

## 📝 修正・運用の注意点

* **画像追加**: 画像ファイルは `public` フォルダ直下に配置し、パスは `/image_name.png` で参照してください。
* **新規セクション追加**: `src/components` にコンポーネントを作成し、`Index.tsx` に配置してください。その際、`sectionIds` 配列にもIDを追加することでナビゲーションと連動します。

## 🤝 コントリビューション

1. 変更を加える際は、必ずブランチを切って作業してください。
2. `npm run build` が通ることを確認してからプッシュしてください。

2026/01/15 from S.F