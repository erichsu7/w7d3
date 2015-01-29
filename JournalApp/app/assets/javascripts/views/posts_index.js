JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts/index"],
  tagName: "ul",

  initialize: function () {
    this.listenTo(this.collection, "add change:title sync remove reset", this.render.bind(this))
  },

  render: function () {
    var content = this.template( { posts: this.collection } );
    this.$el.html(content);
    var that = this;
    this.collection.each( function(post) {
      var view = new JournalApp.Views.PostsIndexItem( { model: post } );
      that.$el.append(view.render().$el);
    });

    return this;
  }
})
