#!/usr/bin/env bash

echo "Enter your GitHub username (or organization name):"
read gh_user_name

echo ""

echo "Enter your GitHub email address:"
read gh_email

echo ""

echo "--------------------------------"
echo "Configuration:"
echo "GitHub username (organization): $gh_user_name"
echo "GitHub email address: $gh_email"
echo "--------------------------------"
echo ""

echo "Proceed with the above settings? (y/n):"
read confirmation

echo ""

if [[ $confirmation == "y" || $confirmation == "Y" ]]; then
    echo "Starting project setup..."
    cp ./.devcontainer/devcontainer.example.json ./.devcontainer/devcontainer.json

    sed -i "s/Your Name/$gh_user_name/g" ./.devcontainer/devcontainer.json
    sed -i "s/your.email@example.com/$gh_email/g" ./.devcontainer/devcontainer.json

    cp ./app/docker-compose.example.yml ./app/docker-compose.yml

    echo "Project setup complete."

    echo ""
    echo "Please start the Dev Container."
else
    echo "Operation cancelled."
    exit 1
fi
