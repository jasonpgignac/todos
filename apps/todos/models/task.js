// ==========================================================================
// Project:   Todos.Task
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Todos.Task = SC.Record.extend({
  isDone: SC.Record.attr(Boolean),
  description: SC.Record.attr(String),
  projectCode: SC.Record.attr(String),
  primaryKey: "_id",

  project: SC.Record.toOne("Todos.Project", {
      inverse: "tasks",
      isMaster: NO
  }),

  treeItemChildren: function() {
      return null;
  }.property('guid').cacheable(),

  name: function() {
      return this.get("description");
  }.property('description').cacheable(),

  isTask: function() {
      return YES;
  }

})


