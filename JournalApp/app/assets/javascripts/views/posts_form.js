JournalApp.Views.PostsForm = Backbone.View.extend({
  template: JST["posts/form"],
  events: {
    "submit form": "submit"
  },

  render: function () {
    var content = this.template( {post: this.model});
    this.$el.html(content);

    return this;
  },

  submit: function (event) {
    event.preventDefault();

    var that = this;
    var params = $(event.currentTarget).serializeJSON();
    var newPost = new JournalApp.Models.Post(params["post"]);

    newPost.save({}, {
      success: function () {
        that.collection.add(newPost, { merge: true });
        Backbone.history.navigate("posts/new", {trigger: true});
      },
      error: function () {
        that.render();
      }
    })
  }

})
