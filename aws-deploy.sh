#!/bin/bash
trap 'echo "Exit"; exit 1' 2
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 071964951237.dkr.ecr.us-east-2.amazonaws.com
docker build -t fox_web .
docker tag fox_web:latest 071964951237.dkr.ecr.us-east-2.amazonaws.com/fox_web:latest
docker push 071964951237.dkr.ecr.us-east-2.amazonaws.com/fox_web:latest
