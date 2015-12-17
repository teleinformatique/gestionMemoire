Meteor.publish('memoiresByUser', function(){
    return Memoires.find({owner: userId});
});