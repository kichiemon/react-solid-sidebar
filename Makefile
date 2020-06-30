.PHONY: build
build:
	yarn build

.PHONY: start
start: build
	cd ./example && yarn start

.PHONY: release
release: build
	npm publish
	npm run deploy
