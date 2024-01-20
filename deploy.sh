#!/bin/bash
# Move to the repository root
cd "$DEPLOYMENT_SOURCE"

# Copy files to wwwroot
cp -R . "$DEPLOYMENT_TARGET"

