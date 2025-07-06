# keepIT

学習管理アプリケーション。

## 技術スタック

- **Frontend**: Next.js 15.3.5 (App Router)
- **UI**: Tailwind CSS
- **Language**: TypeScript
- **Runtime**: Node.js 18
- **Container**: Docker

## 前提条件

- Docker
- Docker Compose
- Git
- Git LFS

## セットアップ手順

### 1. リポジトリをクローンする

```bash
git clone <repo-url> keep-it
cd keep-it
```

### 2. Git LFSをセットアップする

```bash
# Git LFSをインストール（必要に応じて）
# Ubuntu/Debian
sudo apt install git-lfs

# macOS
brew install git-lfs

# Git LFSを初期化
git lfs install
```

### 3. アプリケーションを起動する

```bash
# コンテナをビルドして起動
docker compose up --build
```

### 4. アプリケーションにアクセスする

ブラウザで以下のURLにアクセス:
- **アプリケーション**: http://localhost:3000

## 開発用コマンド

### ローカル開発（コンテナ内で開発する場合）

```bash
# 開発サーバーを起動
npm run dev

# ビルド
npm run build

# 本番環境サーバーを起動
npm start

# 型チェック
npm run lint
```

### Docker関連

```bash
# コンテナを再ビルド
docker compose build --no-cache

# コンテナを停止
docker compose down

# コンテナのログを確認
docker compose logs -f
```

## プロジェクト構成

```
keep-it/
├── app/                    # Next.jsアプリケーション
│   ├── public/            # 静的ファイル
│   ├── src/               # ソースコード
│   └── Dockerfile         # アプリケーション用Dockerfile
├── docker-compose.yml     # Docker Compose設定
├── .gitattributes         # Git LFS設定
└── README.md             # このファイル
```

## トラブルシューティング

### よくある問題

1. **Git LFSエラー**
   - `git lfs install`を実行してください
   - `git lfs pull`でLFSファイルをダウンロードしてください

2. **Dockerビルドエラー**
   - `docker compose build --no-cache`で再ビルドしてください
   - Dockerのディスク容量を確認してください

3. **ポート3000が使用中**
   - `docker-compose.yml`でポート番号を変更してください
