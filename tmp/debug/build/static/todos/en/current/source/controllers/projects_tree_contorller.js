// ==========================================================================
// Project:   Todos.projectsTreeContorller
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Todos.projectsTreeContorller = SC.TreeController.create(
/** @scope Todos.projectsTreeContorller.prototype */ {

  populate: function() {
    var rootNode = SC.Object.create({
      treeItemIsExpanded: YES,
      name: "root",
      treeItemChildren: function() {
        var projectQuery = SC.Query.local(Todos.Project, { orderBy: 'name' });
        var projects = Todos.store.find(projectQuery);
        return projects;
      }.property()
    });
    this.set('content', rootNode);
  }
}) ;
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('todos');