/*****************************************************************************/
/* MemoireList: Event Handlers */
/*****************************************************************************/
Template.MemoireList.events({
});

/*****************************************************************************/
/* MemoireList: Helpers */
/*****************************************************************************/
Template.MemoireList.helpers({
    memoires: function(){
        return Memoires.find();
    }
});

/*****************************************************************************/
/* MemoireList: Lifecycle Hooks */
/*****************************************************************************/
Template.MemoireList.onCreated(function () {
});

Template.MemoireList.onRendered(function () {
});

Template.MemoireList.onDestroyed(function () {
});
