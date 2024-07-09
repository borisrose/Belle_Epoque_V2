#!/bin/bash
#npm init -y
npm install -D webpack webpack-cli webpack-dev-server
touch webpack.config.js tsconfig.json .gitignore .prettierrc.json .prettierignore .node-version index.html main.ts router.ts styles.scss
mkdir -p types src/ts/components src/ts/containers src/ts/views src/ts/layout assets data src/sass/base src/sass/pages src/sass/components src/sass/abstracts src/sass/vendor src/ts/services
