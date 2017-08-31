'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $repo = $('aside');

    $repo.empty();
    $repo.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();

    $('#repo').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
