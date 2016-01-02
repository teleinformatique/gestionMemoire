Meteor.publish('memoiresByUser', function(userId){
    return Memoires.find({owner: userId});
});

Meteor.publish('getfiles', function(){
    return Files.find({});
});

Meteor.publish('memoireParFiliale', function(filtreParFiliale){
    return Memoires.find({filiale: filtreParFiliale});
});

Meteor.publish('getAllMemoires',function(){
    return Memoires.find({});
});

