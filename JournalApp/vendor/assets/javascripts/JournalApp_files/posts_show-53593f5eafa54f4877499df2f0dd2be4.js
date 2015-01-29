JournalApp.Views.PostsShow = Backbone.View.extend({
  template: JST["posts/show"],
  events: {
    "click button.back": "back"
  },

  render: function () {
    var content = this.template( { post: this.model } );
    this.$el.html(content);

    return this;
  },

  back: function () {
    window.history.back();
  }
})
;
