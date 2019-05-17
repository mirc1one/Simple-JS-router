window.addEventListener('load hashchange', function(event) {
  const o = typeof event.originalEvent.oldURL !== typeof undefined ? 
            event.originalEvent.oldURL.substring(event.originalEvent.oldURL.indexOf('#path')) : event.originalEvent.oldURL,
        old = new URLSearchParams(o),
        location = new URLSearchParams(window.location.hash), 
        path = location.get("#path"),
        base = routes.filter( url => url.location == path )[0];

  var toAJAX = [];

  if (old.get('#path') !== path) 
    toAJAX.push({ param: base.location, url: base.url });

  if (base.hasOwnProperty('queries')) {
    for (let i=0; i<base.queries.length; i++) {
      const query = base.queries[i];
      if (null !== location.get(query.param)) {
        if (old.get(query.param) !== location.get(query.param)) {
          toAJAX.push(query)
        }
      }
    }
  }
