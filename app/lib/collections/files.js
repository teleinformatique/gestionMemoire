Files = new FS.Collection("files", {
  stores: [new FS.Store.GridFS("files", {})]
});

Files.allow({
  download: function () {
    return true;
  },
  insert: function(){
    return true;
  }

});