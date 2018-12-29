#!/bin/sh

conf='{ "assetsRoot": "./assets/" }'

develop(){
    echo "Develop Mode";
    npm run build
    CONFIG=$conf webpack
}

analyzer(){
    echo "Analyzer Mode";
    npm run build
    CONFIG=$conf BUNDLE='{}' webpack
}

startServer(){
    echo "Start server";
    node_modules/.bin/ws -p 3000 
}

case "$1" in
  a)
    analyzer 
    ;;
  s)
    startServer 
    ;;
  *)
    develop
    exit
esac

exit $?
