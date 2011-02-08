// ==========================================================================
// Project:   Todos
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/

Todos = SC.Application.create({
  NAMESPACE: 'Todos',
  VERSION: '0.1.0',
  store: SC.Store.create({
    commitRecordsAutomatically: YES
  }).from('Todos.TaskDataSource')
}) ;
Todos.TASKS_QUERY = SC.Query.local(Todos.Task);
Todos.PROJECTS_QUERY = SC.Query.local(Todos.Project);; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('todos');