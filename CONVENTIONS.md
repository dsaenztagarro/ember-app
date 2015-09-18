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


Addons
------

ember install:addon ember-cli-yuidoc

References
----------

[emberaddons](http://www.emberaddons.com/)
[ember object self troll](https://dockyard.com/blog/2014/04/17/ember-object-self-troll)

