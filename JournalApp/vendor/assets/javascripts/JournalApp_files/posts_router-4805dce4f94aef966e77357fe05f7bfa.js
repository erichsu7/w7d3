JournalApp.Routers.Posts = Backbone.Router.extend({
  routes: {
    "": "index",
    "posts/:id": "show",
    "posts/new": "new"
  },

  initialize: function (options) {
    this.$el = options.$el;
  },

  index: function () {
    this._postsIndex = new JournalApp.Views.PostsIndex();
    this.$el.html(this._postsIndex.render().$el);
  },

  show: function(id) {
    var post = this._postsIndex.collection.getOrFetch(id);
    var view = new JournalApp.Views.PostsShow({ model: post });

    this.$el.html(view.render().$el);
  },

  new: function () {
    var post = new JournalApp.Models.Post();
    var view = new JournalApp.Views.PostsForm({ model: post, collection: this.collection });

  }
})
;
