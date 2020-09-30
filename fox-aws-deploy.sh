#!/bin/bash
trap 'echo "Exit"; exit 1' 2
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 772560847811.dkr.ecr.us-east-2.amazonaws.com
docker build -t fox_web .
docker tag fox_web:latest 772560847811.dkr.ecr.us-east-2.amazonaws.com/fox:latest
docker push 772560847811.dkr.ecr.us-east-2.amazonaws.com/fox:latest
