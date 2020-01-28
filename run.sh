#!/bin/bash

cp \
  ../../sou/monorepo/api/swagger.yml \
  modules/openapi-generator/src/test/resources/3_0/petstore.yaml

./run-in-docker.sh mvn package -DskipTests \
&&  ./run-in-docker.sh /gen/bin/typescript-koa-server-petstore.sh

copyFile (){
  fileName=$1
  cp \
    samples/server/petstore/typescript/koa/${fileName} \
    ../../sou/monorepo/api/src/adapters/controllers/http/${fileName}
  echo "$fileName copied"
}


copyFile "Routes.ts"
#copyFile "DummyHandler.ts"
