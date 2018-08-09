.PHONY: help mongo mongo-down install server

help:
	@echo "    mongo"
	@echo "        Up mongo environment."
	@echo "    mongo-down"
	@echo "        Down mongo environment."
	@echo "    server"
	@echo "        Starts angular and nodejs servers."
	@echo "    install"
	@echo "        Install npm packages to prepare angular and nodejs servers."

mongo:
	docker-compose up mongo

mongo-down:
	docker-compose down mongo

install:
	npm install

server:
	node server.js & ng serve


