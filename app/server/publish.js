Meteor.publish('memoiresByUser', function(userId){
    return Memoires.find({owner: userId});
});