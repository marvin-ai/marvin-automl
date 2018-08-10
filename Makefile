.PHONY: help mongo mongo-down install server

define BROWSER_PYSCRIPT
import webbrowser
webbrowser.open("http://localhost:4200/home")
endef
export BROWSER_PYSCRIPT
BROWSER := python -c "$$BROWSER_PYSCRIPT"

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
	ng serve && node server.js && $(BROWSER)


