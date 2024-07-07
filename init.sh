
#!/bin/bash

MKCERT_INSTALLED=$(which mkcert)

if [ -z $MKCERT_INSTALLED ];then
    arch -arm64 brew install mkcert
fi

mkcert -install
mkcert localhost