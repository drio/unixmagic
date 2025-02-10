.PHONY: all info
all: 
	@cat Makefile

serve: umn.webp index.html
	python3 -m http.server 8000

info:
	identify ump.webp

#convert ump.png -resize 1920x ump.webp
static/umn.webp: static/ump.png
	convert ump.png ump.webp

static/ump.png: static
	wget https://github.com/tyingq/unix-magic-poster/raw/main/ump.png

static: 
	mkdir static
