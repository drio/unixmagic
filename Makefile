.PHONY: all info serve
all: 
	@cat Makefile

serve:
	hugo server --buildDrafts

info:
	identify ump.webp

#convert ump.png -resize 1920x ump.webp
static/umn.webp: static/ump.png
	convert ump.png ump.webp

static/ump.png: static
	wget https://github.com/tyingq/unix-magic-poster/raw/main/ump.png

static: 
	mkdir static
