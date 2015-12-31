/*****************************************************************************/
/* EditMemoire: Form Hooks */
/*****************************************************************************/
AutoForm.addHooks('insertMemoireForm', {
    onSuccess: function(){
        Router.go('memoiresList');
        Session.set('confirmMessage','Mémoire crée avec succés');
    }
})
/*****************************************************************************/
/* InsertMemoire: Event Handlers */
/*****************************************************************************/
Template.InsertMemoire.events({
    
});

/*****************************************************************************/
/* InsertMemoire: Helpers */
/*****************************************************************************/
Template.InsertMemoire.helpers({
});

/*****************************************************************************/
/* InsertMemoire: Lifecycle Hooks */
/*****************************************************************************/
Template.InsertMemoire.onCreated(function () {
});

Template.InsertMemoire.onRendered(function () {
});

Template.InsertMemoire.onDestroyed(function () {
});
