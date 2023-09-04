#!/bin/bash
set -e

echo "Deploying started..."
git pull origin master
git pull origin master
echo "Installing dependencies..."
npm install --force
npm run build
pm2 stop all
pm2 start npm --name "thegoldenship" -- run start -- --port=8077

echo "Finished..."