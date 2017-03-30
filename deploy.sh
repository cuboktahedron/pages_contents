#!/bin/bash

if [ $# -eq 0 ]; then
  echo "Usage: deploy.sh commit_message"
  exit 1
fi

echo -e "\033[0;32mDeploying updates to GitHub ...\033[0m"

# Build the project.
hugo # if using a theme, replace by `hugo -t <yourtheme>`

# Go To Public folder
cd public

# Add changes to git.
git add -A

# Commit changes.
msg="$1"
git commit -m "$msg"

# Push source and build repos.
git push origin master

# Come Back
cd ..


# push source files
git add -A
git commit -m "$msg"
git push origin master

