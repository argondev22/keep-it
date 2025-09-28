#!/usr/bin/env bash

echo "Starting project initialization..."

cp ./.devcontainer/devcontainer.example.json ./.devcontainer/devcontainer.json
cp ./app/docker-compose.example.yml ./app/docker-compose.yml

echo "Project initialization complete."

echo ""
echo "Please start the Dev Container."
