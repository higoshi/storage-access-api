# storage-access-api-demo

## Setup

with MacOS
```sh
$ cd storage-access-api-demo
$ openssl req -new -x509 -sha256 -newkey rsa:2048 -days 365 -nodes -out ./first/ssl/pem.pem -keyout ./first/ssl/key.key
$ openssl req -new -x509 -sha256 -newkey rsa:2048 -days 365 -nodes -out ./third/ssl/pem.pem -keyout ./third/ssl/key.key
```

## Start

```sh
$ sudo docker-compose up -d
```
