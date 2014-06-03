# Simple bower example

## Getting diagram-js and its dependencies

You can install [diagram-js](https://github.com/bpmn-io/diagram-js) with [bower](http://bower.io) by typing
`bower install diagram-js`.

This will install diagram-js and its dependencies ([lodash](https://github.com/lodash/lodash) and [snap.svg](https://github.com/adobe-webplatform/Snap.svg)) in a `bower_components` directory.

## bower.json

If you have a `bower.json` file, just add `diagram-js` to its `dependencies` section and type `bower install`
or alternatively type `bower install --save diagram-js` (which will automatically add the dependency to your `bower.json`).

## Usage

In a HTML file, add the script tags for the dependencies:

```html
<script type="text/javascript" src="../bower_components/jquery/dist/jquery.js"></script>
<script type="text/javascript" src="../bower_components/lodash/dist/lodash.js"></script>
<script type="text/javascript" src="../bower_components/snap.svg/dist/snap.svg.js"></script>
```

and then the script for script tag for diagram-js:

```html
<script type="text/javascript" src="../bower_components/diagram-js/diagram.js"></script>
```

Now, to use diagram-js, add a script tag with something like:

```javascript
// get the library
var Diagram = require('diagram-js');

// and instanciate
var diagram = new Diagram();
```

Have a look at the [index.html file](https://github.com/bpmn-io/diagram-js-examples/tree/master/simple-bower/app/index.html#L41) in the `app` directory for some inspiration.