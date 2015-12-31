/*****************************************************************************/
/* EditMemoire: Form Hooks */
/*****************************************************************************/
AutoForm.addHooks('editMemoireForm', {
    onSuccess: function(){
        Router.go('memoiresList');
        Session.set('confirmMessage','Mémoire modifié avec succés');
    }
})
/*****************************************************************************/
/* EditMemoire: Event Handlers */
/*****************************************************************************/
Template.EditMemoire.events({
});

/*****************************************************************************/
/* EditMemoire: Helpers */
/*****************************************************************************/
Template.EditMemoire.helpers({
});

/*****************************************************************************/
/* EditMemoire: Lifecycle Hooks */
/*****************************************************************************/
Template.EditMemoire.onCreated(function () {
});

Template.EditMemoire.onRendered(function () {
});

Template.EditMemoire.onDestroyed(function () {
});
