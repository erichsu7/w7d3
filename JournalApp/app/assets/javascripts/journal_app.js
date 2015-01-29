window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    new JournalApp.Routers.Posts({
      $el: $("#content"),
      $sidebar: $("#sidebar")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
