// ==========================================================================
// Project:   Todos.Project Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

sc_require('models/project');

Todos.Project.FIXTURES = [

  {
    guid: 1,
    description: "first project",
    name: "first project",
    tasks: [1,2]
  },
  
  {
    guid: 2,
    description: "second project",
    name: "second project",
    tasks: [3]
  }

];
