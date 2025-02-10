.PHONY: all info
all: 
	@cat Makefile

serve: umn.webp index.html
	python3 -m http.server 8000

info:
	identify ump.webp

#convert ump.png -resize 1920x ump.webp
umn.webp: ump.png
	convert ump.png ump.webp

ump.png:
	wget https://github.com/tyingq/unix-magic-poster/raw/main/ump.png
