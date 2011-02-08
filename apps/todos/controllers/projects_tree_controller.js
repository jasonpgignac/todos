// ==========================================================================
// Project:   Todos.projectsTreeContorller
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Todos.projectsTreeController = SC.TreeController.create(
/** @scope Todos.projectsTreeContorller.prototype */ {

  populate: function() {
    var rootNode = SC.Object.create({
      treeItemIsExpanded: YES,
      name: "root",
      treeItemChildren: function() {
        var projects = Todos.store.find(Todos.PROJECTS_QUERY);
        return projects;
      }.property()
    });
    this.set('content', rootNode);
  }
}) ;
