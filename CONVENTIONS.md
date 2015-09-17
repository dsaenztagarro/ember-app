Routes
------

1. Case multiple objects related to route

```
  /* default */
  setupController(controller, model) {
    controller.set('model', model);
  }
```

  =>

```
  setupController(controller, model) {
    controller.set('photos', model.photos);
    controller.set('photo', model.photo);
  }
```
