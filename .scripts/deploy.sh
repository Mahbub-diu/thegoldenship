#!/bin/bash
set -e

echo "Deploying started..."
git pull origin master
echo "Installing dependencies..." 
export NVM_DIR=~/.nvm
  source ~/.nvm/nvm.sh
  npm --help
echo "Installing dependencies..."
npm install --yes
echo "Building..."
npm run build
echo "Restarting server..."
pm2 stop all
echo "Starting server..."
pm2 start npm --name "thegoldenship" -- run start -- --port=8077

echo "Finished..."