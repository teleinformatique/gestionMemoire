Meteor.publish('memoiresByUser', function(userId){
    return Memoires.find({owner: userId});
});

Meteor.publish('getfiles', function(){
    return Files.find({});
});

