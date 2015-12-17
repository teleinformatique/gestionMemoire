Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/insert_memoire',{
  name: 'InsertMemoire',
  controller: 'MemoiresController',
  action: 'insert',
  where: 'client'
});