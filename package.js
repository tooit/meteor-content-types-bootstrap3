Package.describe({
  name: 'tooit:content-types-bootstrap3',
  summary: 'Extend tooit:content-types package with Bootstrap 3 theme.',
  version: '0.0.3',
  git: 'https://github.com/tooit/meteor-content-types-bootstrap3.git'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.3', 'METEOR@0.9.4', 'METEOR@1.0']);

  var dependencies = [
    'templating',
    'tooit:content-types@0.0.9'
  ];
  api.use(dependencies);
  api.imply(dependencies);

  api.addFiles([
    'client/templates/bootstrap3/_wrapper.html',
    'client/templates/bootstrap3/index.html',
    'client/templates/bootstrap3/create.html',
    'client/templates/bootstrap3/read.html',
    'client/templates/bootstrap3/update.html',
    'client/templates/bootstrap3/delete.html'
  ], 'client');
});
