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

### 2. Dev Containerを起動する

### 3. 開発環境でアプリケーションを起動する

```bash
# 開発環境でコンテナをビルドして起動（ホットリロード有効）
docker compose up --build
```

### 4. アプリケーションにアクセスする

ブラウザで以下のURLにアクセス:
- **アプリケーション**: http://localhost:3000

## 開発用コマンド

### Docker関連

```bash
# 開発環境のコンテナを再ビルド
docker compose build --no-cache

# コンテナを停止
docker compose down

# コンテナのログを確認
docker compose logs -f

# コンテナ内でコマンドを実行
docker compose exec app npm run lint
```

### ローカル開発（コンテナ内で開発する場合）

```bash
# 型チェック
docker compose exec app npm run lint

# 依存関係のインストール
docker compose exec app npm install

# パッケージの追加
docker compose exec app npm install <package-name>
```

## プロジェクト構成

```
keep-it/
├── app/                    # Next.jsアプリケーション
│   ├── public/            # 静的ファイル
│   ├── src/               # ソースコード
│   └── Dockerfile         # マルチステージDockerfile
├── docker-compose.yml     # 開発環境用Docker Compose設定
└── README.md             # このファイル
```
