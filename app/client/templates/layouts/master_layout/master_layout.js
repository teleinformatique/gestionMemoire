Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
    'click #filtre-user': function(){
        Session.set('filtreUser',true);
        Router.go('memoiresList');
        return false;
    },
    'click #cancel-filtre-user': function(){
        Session.set('filtreUser',false);
        Router.go('memoiresList');
        return false;
    }
});
