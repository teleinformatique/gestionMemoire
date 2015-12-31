/*****************************************************************************/
/* EditMemoire: Form Hooks */
/*****************************************************************************/
AutoForm.addHooks('editMemoireForm', {
    onSuccess: function(){
        Router.go('memoiresList');
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
