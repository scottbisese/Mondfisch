#!/bin/bash
echo "Starting deployment script."

# Paths
SOURCE_DIR="$DEPLOYMENT_SOURCE" # The source directory of your project
TARGET_DIR="$DEPLOYMENT_TARGET/wwwroot" # The Azure wwwroot directory

echo "Copying files from $SOURCE_DIR to $TARGET_DIR"
# Copy files to wwwroot
cp -R $SOURCE_DIR/* $TARGET_DIR

echo "Deployment script finished."

