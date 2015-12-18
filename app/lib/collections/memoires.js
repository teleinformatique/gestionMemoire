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
  fichier:{
    type: String,
    max: 500
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
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Memoires.deny({
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
}
