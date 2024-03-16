#!/usr/bin/env bash
# This script is used to start the Angular Chat application
# if --dev is passed as an argument, the docker-compose.dev.yml file will be used

if [ "$1" == "--dev" ]; then
    echo "Starting Angular Chat in development mode"
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
else
    echo "Starting Angular Chat in production mode"
    docker-compose -f docker-compose.yml up --build
fi

