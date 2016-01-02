/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
    "click #js-filtre-gestion, click #js-filtre-telecom, click #js-filtre-teleinfo": function(event, template){
        var filtreParFiliale = event.target.getAttribute("data-filtre");
        Session.set("filtreParFiliale", filtreParFiliale);
        Router.go("memoiresList");
        return false;
  }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
