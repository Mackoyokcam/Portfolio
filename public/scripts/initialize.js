'use strict';

function Project(rawData) {
  this.title = rawData.title;
  this.picture = rawData.picture;
  this.gitHubUrl = rawData.gitHubUrl;
  Project.all.push(this);
}

Project.all = [];

Project.create = function(rawData) {
  rawData.forEach(el => new Project(el));
}

Project.fetchAll = function() {
  $.getJSON('/data/projects.json').then(
      function(data){
        Project.create(data);
      },
      function(xhr, status){
        console.log('Error: ' + status);
      }
    );
};
