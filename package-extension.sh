#!/bin/bash

rm -rf dist/* extension.zip
npm run build
./copy-files.sh
cd dist && zip -r ../extension.zip * && cd ..
echo "Extensão empacotada em extension.zip"