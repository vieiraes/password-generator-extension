#!/bin/bash
mkdir -p dist/popup dist/icons
cp src/popup/popup.html dist/popup/
cp src/popup/popup.css dist/popup/
cp assets/icons/icon*.png dist/icons/
cp manifest.json dist/