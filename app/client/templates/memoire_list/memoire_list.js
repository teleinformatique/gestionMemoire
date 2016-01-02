/*****************************************************************************/
/* MemoireList: Event Handlers */
/*****************************************************************************/
Template.MemoireList.events({
    'click .js-btn-dowload': function(){
        var btnDownload = $('.js-btn-dowload');
        var fileId = btnDownload.data('file');
        console.log(fileId);
        Meteor.call('getFile',fileId,function(error, result){
            if (result && result.url) {
                
                window.open(result.url);
            } else { 
                console.log('Error on file dowload ' + error);
            }
        });
        
    }
});

/*****************************************************************************/
/* MemoireList: Helpers */
/*****************************************************************************/
Template.MemoireList.helpers({
    memoires: function(){
        return Memoires.find();
    },
    getFile: function(fileId){
        console.log(fileId);
        var file = Files.find({_id:fileId});
        return file.url;
    },
    confirmMessage: function(){
      return Session.get('confirmMessage');
    },
    filtreParFiliale: function(){
        return Session.get('filtreParFiliale');
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
    Session.set('confirmMessage',false);
    Session.set('filtreParFiliale','');
});
