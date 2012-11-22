
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

test:
	node_modules/.bin/mocha -r should

clean:
	rm -fr build components template.js

.PHONY: clean
