'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    $('#repo p').hide();

    $('#repo ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
