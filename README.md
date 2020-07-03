# nuxt-ssr-firebase

## Dependencies

- nuxt
- firebase-tools

## Overview

Create a project with [firebase](https://console.firebase.google.com/)

## Setup

``` shell
$ cd app && yarn install && cd ../functions && npm i && cd ../ && npm i -g firebase-tools@8.4.3
$ firebase login
$ firebase init
# ? What do you want to use as your public directory? (public) Enter
# ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) N
```

- Rewrite [here](https://github.com/uuki/nuxt-ssr-firebase/blob/master/firebase.json#:~:text=%3Cfunction%20name%3E) and [here](https://github.com/uuki/nuxt-ssr-firebase/blob/master/functions/index.js#:~:text=.functionName)

## Deploy

``` shell
$ yarn deploy
```