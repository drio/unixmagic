.PHONY: help info serve serve-all build version
help:
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

serve-all: version
	hugo server --buildDrafts --bind 0.0.0.0 --baseURL=http://localhost:1313/

info:
	identify static/ump.webp

# Fetch the poster image if it's missing.
static/ump.png:
	wget -O $@ https://github.com/tyingq/unix-magic-poster/raw/main/ump.png

# Regenerate the WebP from the PNG.
static/ump.webp: static/ump.png
	convert static/ump.png static/ump.webp

static/favicon.ico: static/ump.webp
	convert static/ump.webp -resize 48x48 static/favicon.ico

# 180x180 home-screen icon for iOS. Matches favicon.png's framing
# (whole poster squashed into a square).
static/apple-touch-icon.png: static/ump.webp
	ffmpeg -y -v error -i static/ump.webp -vf "scale=180:180:flags=lanczos" -frames:v 1 $@

# Convert the oversized animated demo GIF into animated WebP.
# Needs `gif2webp` (brew install webp). Animated WebP is typically
# ~10x smaller than the GIF and renders in the GitHub README <img> tag.
unixmagic.desktop.v2.webp: unixmagic.desktop.v2.gif
	gif2webp -q 75 -m 6 -mt $< -o $@
