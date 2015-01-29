JournalApp.Views.PostsShow = Backbone.View.extend({
  template: JST["posts/show"],
  events: {
    "click button.back": "back",
    "dblclick .editable": "editField",
    "blur .edit-input": "saveField"
  },

  render: function () {
    var content = this.template( { post: this.model } );
    this.$el.html(content);

    return this;
  },

  back: function () {
    window.history.back();
  },

  editField: function (event) {
    event.preventDefault();
    console.log($(event.currentTarget));
    var $currentTarget = $(event.currentTarget);
    var field = $currentTarget.data("field");
    var $input = $("<input class='edit-input'>");

    $input.data("field", field);
    $input.val(this.model.escape(field));
    $currentTarget.removeClass("editable");
    $currentTarget.html($input);
    $input.focus();
  },

  saveField: function (event) {
    event.preventDefault();
    var that = this;

    var $currentTarget = $(event.currentTarget);
    var field = $currentTarget.data("field");
    var newVal = $currentTarget.val();
    var $pre = $("<pre class='editable'>");
    $pre.data("field", field);
    $currentTarget.removeClass("edit-input");
    $currentTarget.html($pre);

    this.model.set(field, newVal);
    this.model.save({
      success: function () {
        debugger;
        console.log("Updated" + field);
        that.render();
      }
    });

  }

})
