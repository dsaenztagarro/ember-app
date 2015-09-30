Installation
------------

```
bower install --force-latest
npm install
```

Adding new service clients
--------------------------

For each service client:

From master project:

- Add entry to `package.json`

```
"dependencies": {
  "ember-image-service": "0.0.1"
},
```

- Add entry to `app/router.js` (example for ember-image-service)

```
// ...
import imageServiceRouter from 'ember-image-service/router';

// ...

Router.map(function() {
  //...
  imageServiceRouter(this);
});

export default Router;
```

Development mode
----------------

- From service client project folder run: `npm link`

- Run this command on shell:

```
npm link ember-image-service
```

Where `ember-image-service` is the name of the service client as figured
`name` in its `package.json`
