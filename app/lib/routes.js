Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.onBeforeAction(function(){
  if (!Meteor.user()) {
    this.render('AccessDenied')
  } else {
    this.next();
  }
}, {only:['memoiresList','insertMemoire']});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/insert_memoire',{
  name: 'insertMemoire',
  controller: 'MemoiresController',
  action: 'insert',
  where: 'client'
});

Router.route('/memoires_list',{
  name:'memoiresList',
  controller: 'MemoiresController',
  action: 'list',
  where: 'client'
});

Router.route('/memoire/:_id',{
  name:'editMemoire',
  controller: 'MemoiresController',
  action: 'edit',
  where: 'client'
});

