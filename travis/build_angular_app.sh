#!/bin/sh

set -e
set -u

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Run this script in container:
# docker run -it --rm -v `pwd`:/workdir -w /workdir node:15.14.0-alpine3.10 sh


echo Working dir
pwd

apk add --no-cache chromium xvfb xauth libxtst libnotify-dev nss alsa-lib

export CHROME_BIN=/usr/bin/chromium-browser

echo "Update npm"
npm install -g npm@7.9.0

echo "Building Web Page"
export CYPRESS_CACHE_FOLDER="${SCRIPT_DIR}/cypress_cache"

npm install


npm run lint
npm run build
npm run test -- --karma-config karma.conf.ci.js
npm run e2e:ci
