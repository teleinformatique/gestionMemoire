Memoires = new Mongo.Collection('memoires');

Memoires.attachSchema(new SimpleSchema({
  sujet:{
    type: String,
    label: "Sujet du mémoire",
    max: 500
  },
  resume:{
    type: String,
    label: "Résumé",
    max:1024,
    optional:true
  },
  annee:{
    type: String,
    label: "Année"
  },
  fileId:{
    type: String,
    autoform:{
      afFieldInput:{
        type: "fileUpload",
        collection: "files",
        label: "Choisir un fichier"
      }
    }
  },
  autheur:{
    type: String,
    label: "Autheur",
    max: 500
  },
  niveau:{
    type: String,
    label: "Niveau",
    allowedValues: ['Licence', 'Master', 'Télécommunication']
  },
  filiale:{
    type: String, label: "Filiale",
    allowedValues: ['Gestion', 'Télécommunication', 'Téléinforamtique']
  },
  owner:{
    type: String,
    autoValue: function(){
      return this.userId  
      
    }
  },
  createdDate:{
    type: Date,
    autoValue: function(){
      return new Date();
    }
  }
}));

if (Meteor.isServer) {
  Memoires.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

  // Memoires.deny({
  //   insert: function (userId, doc) {
  //     return true;
  //   },

  //   update: function (userId, doc, fieldNames, modifier) {
  //     return true;
  //   },

  //   remove: function (userId, doc) {
  //     return true;
  //   }
  // });
}
