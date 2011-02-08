// ==========================================================================
// Project:   Todos.Project
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Todos.Project = SC.Record.extend({

  name: SC.Record.attr(String),
  description: SC.Record.attr(String),
  primaryKey: "_id",
  
  tasks: SC.Record.toMany("Todos.Task", {
    inverse: "project", isMaster: YES
  }),
  
  treeItemIsExpanded: NO,
  
  treeItemChildren: function() {
    return this.get("tasks");
  }.property(),
  
  isProject: function(){ return YES; },

}) ;
