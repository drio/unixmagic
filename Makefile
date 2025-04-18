.PHONY: all info serve
all: 
	@cat Makefile

serve:
	hugo server --buildDrafts --baseURL=http://localhost:1313/

serve/all:
	hugo server --buildDrafts --bind 0.0.0.0 --baseURL=http://localhost:1313/

info:
	identify ump.webp

#convert ump.png -resize 1920x ump.webp
static/umn.webp: static/ump.png
	convert ump.png ump.webp

static/ump.png: static
	wget https://github.com/tyingq/unix-magic-poster/raw/main/ump.png

static: 
	mkdir static

static/favicon.ico:
	convert static/ump.webp -resize 48x48 static/favicon.ico

