.PHONY: all info serve serve/all build version
all: 
	@cat Makefile

# Write current git HEAD into data/version.toml so Hugo templates can
# display the project's actual version (not just the last content edit,
# which is all .GitInfo on a Page gives you). Regenerated every run.
version:
	@mkdir -p data
	@printf 'hash = "%s"\nfull_hash = "%s"\ndate = "%s"\n' \
	  "$$(git rev-parse --short HEAD)" \
	  "$$(git rev-parse HEAD)" \
	  "$$(git log -1 --format=%cs)" > data/version.toml

build: version
	hugo --minify

serve: version
	hugo server --buildDrafts --baseURL=http://localhost:1313/

serve/all: version
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

