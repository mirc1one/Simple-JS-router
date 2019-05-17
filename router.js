const routes = [
  {
    location: 'dashboard',
    url: ``,
    queries: [
      {
        param: 't',
        url: ``
      }
    ]
  },
  {
    location: 'projects',
    url: `${base_url}`
  },
  {
    location: 'project',
    url: ``,
    queries: [
      {
        param: 'id',
        url: ``
      },
      {
        param: 't',
        url: ``
      }
    ]
  },
  {
    location: 'details',
    url: ``,
    queries: [
      {
        param: 'pid',
        url: ``
      }
    ]
  },
  {
    location: 'files',
    url: ``,
    queries: [
      {
        param: 'f',
        url: ``
      }
    ]
  },
  {
    location: 'timeline',
    url: ``,
    queries: [
      {
        param: 'pid',
        url: ``
      }
    ]
  },
  {
    location: 'team-members',
    url: ``,
    queries: [
      {
        param: 'id',
        url: ``
      }
    ]
  },
  {
    location: 'my_tasks',
    url: ``
  },
  {
    location: 'messages',
    url: ``,
    queries: [
      {
        param: 'gid',
        url: ``
      },
      {
        param: 'mid',
        url: ``
      }
    ]
  },
  {
    location: 'clients',
    url: ``
  },
  {
    location: 'edit-client',
    url: ``,
    queries: [
      {
        param: 'id',
        url: ``
      }
    ]
  },
  {
    location: 'add-new-client',
    url: ``
  },
  {
    location: 'websiteDevelopment',
    url: ``,
    queries: [
      {
        param: 't',
        url: ``
      },
      {
        param: 'issue',
        url: ``
      }
    ]
  },
  {
    location: 'invoices',
    url: ``,
    queries: [
      {
        param: 'iid',
        url: ``
      }
    ]
  },
  {
    location: 'add-new-invoice',
    url: ``
  },
  {
    location: 'messages',
    url: ``,
    queries: [
      {
        param: 'gid',
        url: ``
      }
    ]
  },
  {
    location: 'reports',
    url: ``
  },
  {
    location: 'profile',
    url: ``,
    queries: [
      {
        param: 'u',
        url: ``
      }
    ]
  },
  {
    location: 'settings',
    url: ``
  },
  {
    location: 'notifications',
    url: ``
  },
  {
    locations: 'invitations',
    url: ``
  },
  {
    locations: 'my_teams',
    url: ``
  }
]; // many more ... etc

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
          /* properties to be ajax-ed */
          toAJAX.push(query)
        }
      }
    }
  }
