qtip
===========================

pretty, mobile-friendly tooltips.

![screenshot](http://i.imgur.com/z0KmBrE.png)

## demo

http://performancejs.com/qtip/demo/

## features

- tiny (.5k gzipped), no dependencies
- pretty, stylable via CSS
- semantic (augments existing `title` attributes), uses CSS for styling
- supported environments: AMD, CommonJS, browser globals

## usage

installation is nearly drop-in. just add empty `data-qtip` attributes to any elements with existing `title` attributes that you'd like to style. then attach `qtip.js` to the bottom of your page (it will self-initialize).

```html
<html>
	<head>
		...
	</head>
	<body>

		<span title="some text here" data-qtip></span>

		<a title="more text" data-qtip href="#"></span>

		...

		<script src="qtip.js"></script>

	</body>
</html>
```

## building it yourself

```bash
# install build dependencies
npm install

# build css
stylus stylus --out css

# build js
grunt
```

## browser api requirements:

- `addEventListener` ([mdn](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener#Browser_compatibility))
- `classList` ([caniuse](http://caniuse.com/#feat=classlist))
- `querySelectorAll` ([caniuse](http://caniuse.com/#search=querySelectorAll))