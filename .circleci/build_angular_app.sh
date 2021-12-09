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

echo "Update npm"
npm install -g npm@7.9.0

echo "Building Web Page"

npm install
#npx cypress install --force


npm run lint
npm run build -- --output-path docs --base-href /angular-web-page-poc/
npm run test -- --karma-config karma.conf.ci.js
#npm run e2e:ci


cp "docs/index.html" "docs/404.html"


git add docs
git commit -m"Update Github angular page automated."
git push origin
