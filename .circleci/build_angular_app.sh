#!/bin/bash

set -e
set -u
set -x

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" > /dev/null && pwd )"

export CYPRESS_CACHE_FOLDER="${SCRIPT_DIR}/cypress_cache"
export npm_config_cache="${SCRIPT_DIR}/.npm"

# Run this script in container:
# docker run -it --rm -v `pwd`:/workdir -w /workdir cypress/browsers:node14.17.0-chrome91-ff89 sh


pushd "${SCRIPT_DIR}/.."

echo Working dir
pwd

echo "Building Web Page"

npm install -g npm@8.2.0
npm install
#npx cypress install --force


npm run lint
npm run build -- --prod --output-path docs --base-href /angular-web-page-poc/
npm run test -- --karma-config karma.conf.ci.js
#npm run e2e:ci


cp "docs/index.html" "docs/404.html"
touch docs/.nojekyll
git rm -f docs/assets/.gitignore  # .gitignore is needed during development
git rm -f .circleci/config.yml  # don't build on gh-branch

git add -u .
git add docs
git commit -m"Update Github angular page automated."
git push --force origin HEAD:gh-pages
