// ==========================================================================
// Project:   Todos
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Todos.main = function main() {

  Todos.getPath('mainPage.mainPane').append() ;

  Todos.projectsTreeController.populate();
  var tasks = Todos.store.find(Todos.TASKS_QUERY);
  Todos.tasksArrayController.set('content',tasks);

};

function main() { Todos.main(); };
