#! /bin/bash

echo "Githubのユーザー名を入力してください:"
read gh_user_name

echo ""

echo "Githubのメールアドレスを入力してください:"
read gh_email

echo ""

echo "--------------------------------"
echo "設定内容:"
echo "Githubのユーザー名: $gh_user_name"
echo "Githubのメールアドレス: $gh_email"
echo "--------------------------------"
echo ""

echo "上記の設定で続行しますか？ (y/n):"
read confirmation

echo ""

if [[ $confirmation == "y" || $confirmation == "Y" ]]; then
    echo "プロジェクトのセットアップを開始します..."
    cp ./.devcontainer/devcontainer.example.json ./.devcontainer/devcontainer.json

    sed -i "s/Your Name/$gh_user_name/g" ./.devcontainer/devcontainer.json
    sed -i "s/your.email@example.com/$gh_email/g" ./.devcontainer/devcontainer.json

    cp ./docker-compose.example.yml ./docker-compose.yml

    echo "プロジェクトのセットアップが完了しました。"

    echo ""
    echo "Dev Containerを起動します..."
    devcontainer up
else
    echo "キャンセルされました。"
    exit 1
fi
