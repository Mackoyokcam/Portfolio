'use strict';
var app = app || {};

(function(module) {
  const repoController = {};

  repoController.index = () => {
    app.repos.requestRepos(app.repoView.index);
  };

  module.repoController = repoController;
})(app);
