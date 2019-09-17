source_js = $(shell find src -name "*.js")
source_css = $(shell find src -name "*.css")

public: public/bundle.js public/style.css

public/bundle.js: $(source_js) rollup.config.js package-lock.json
	node_modules/.bin/rollup -c

public/style.css: $(source_css)
	cat $(source_css) > public/style.css