JournalApp.Views.PostsIndexItem = Backbone.View.extend({
  tagName: "li",
  template: JST["posts/index_item"],
  events: {
    "click .delete-post": "destroyPost",
    "click": "showPost"
  },

  render: function () {
    var content = this.template( {post: this.model} )
    this.$el.html(content);

    return this;
  },

  destroyPost: function () {
    this.model.destroy();
  },

  showPost: function () {
    Backbone.history.navigate("posts/" + this.model.escape("id"), { trigger: true });
  }
})
;
