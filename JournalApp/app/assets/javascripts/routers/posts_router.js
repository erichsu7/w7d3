JournalApp.Routers.Posts = Backbone.Router.extend({
  routes: {
    "": "index",
    "posts/new": "new",
    "posts/:id": "show"
  },

  initialize: function (options) {
    this.$el = options.$el;
    this.$sidebar = options.$sidebar;
  },

  index: function () {
    var that = this;
    this.collection = new JournalApp.Collections.Posts();
    this.collection.fetch({
      success: function () {
        var view = new JournalApp.Views.PostsIndex({ collection: that.collection });
        that.$sidebar.html(view.render().$el);
      }
    });

  },

  show: function(id) {
    var post = this.collection.getOrFetch(id);
    var view = new JournalApp.Views.PostsShow({ model: post });

    this.$el.html(view.render().$el);
  },

  new: function () {
    var post = new JournalApp.Models.Post();
    var view = new JournalApp.Views.PostsForm({ model: post, collection: this.collection });

    this.$el.html(view.render().$el);
  },

})
