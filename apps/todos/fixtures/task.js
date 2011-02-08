// ==========================================================================
// Project:   Todos.Task Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

sc_require('models/task');

Todos.Task.FIXTURES = [

 { 
     "guid": "task-1",
     "description": "Build my first SproutCore app",
     "isDone": false,
     "projectCode": "aaa-bbb",
     project: 1
 },
 
 {
     "guid": "task-2",
     "description": "Build a really awesome SproutCore app",
     "isDone": false,
      "projectCode": "aaa-bbb",
      project: 1
 },
 
 {
     "guid": "task-3",
     "description": "Next, the world!",
     "isDone": false,
      "projectCode": "aaa-ccc",
      project: 2
 }

];
