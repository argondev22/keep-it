# keepIT

学習管理アプリケーション。

## 前提条件

- [Dev Containers](https://containers.dev/)をインストールしていること

## セットアップ例（macOS/Linux環境）

### 1. リポジトリをクローンする

```bash
git clone <repo-url> keep-it
cd keep-it
```

### 2. Dev Containersを起動する

```bash
bash ./bin/setup-container.sh
# または
zsh ./bin/setup-container.sh
```

以降の手順はDev Containers内で行う。

### 3. 開発環境でアプリケーションを起動する

```bash
docker compose up
```

### 4. アプリケーションにアクセスする

ブラウザで以下のURLにアクセス:
- **アプリケーション**: http://localhost:3000


## プロジェクト構成

```
keep-it/
├── app/                   # Next.jsアプリケーション
│   ├── public/            # 静的ファイル
│   ├── src/               # ソースコード
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```
