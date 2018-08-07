.PHONY: help up down

help:
	@echo "    up"
	@echo "        Up environment..."

up:
	docker-compose up

down: 
	docker-compose down


