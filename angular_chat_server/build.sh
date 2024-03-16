#!/usr/bin/env bash
# Build the project
./gradlew clean build
# Build Container
docker build -t marvin/angular_chat_server:latest .
