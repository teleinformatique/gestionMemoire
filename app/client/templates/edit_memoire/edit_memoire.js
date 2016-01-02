/*****************************************************************************/
/* EditMemoire: Form Hooks */
/*****************************************************************************/
AutoForm.addHooks('editMemoireForm', {
    onSuccess: function(){
        Router.go('memoiresList');
        Session.set('confirmMessage','Mémoire modifié avec succés');
    }
});
AutoForm.addHooks('removeMemoireForm', {
    onSuccess: function(){
        Router.go('memoiresList');
        Session.set('confirmMessage','Mémoire supprimé avec succés');
    }
});
/*****************************************************************************/
/* EditMemoire: Event Handlers */
/*****************************************************************************/
Template.EditMemoire.events({
});

/*****************************************************************************/
/* EditMemoire: Helpers */
/*****************************************************************************/
Template.editMemoire.helpers({
    beforeRemove: function(){
        return function (collection, id) {
            var doc = collection.findOne(id);
            if (confirm("Confirmer la suppresion du mémoire: " + doc.sujet + "?")) {
                this.remove();
                Router.go("memoiresList");
      }
    };
    }
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
