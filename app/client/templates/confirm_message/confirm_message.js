/*****************************************************************************/
/* ConfirmMessage: Event Handlers */
/*****************************************************************************/
Template.ConfirmMessage.events({
});

/*****************************************************************************/
/* ConfirmMessage: Helpers */
/*****************************************************************************/
Template.ConfirmMessage.helpers({
    confirmMessage: function(){
      return Session.get('confirmMessage');
    }
});

/*****************************************************************************/
/* ConfirmMessage: Lifecycle Hooks */
/*****************************************************************************/
Template.ConfirmMessage.onCreated(function () {
});

Template.ConfirmMessage.onRendered(function () {
});

Template.ConfirmMessage.onDestroyed(function () {
});
