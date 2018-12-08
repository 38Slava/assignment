#!/usr/bin/env bash

(cd server && npm run start) &
(cd client && ng serve --proxy-config proxy.config.json)

