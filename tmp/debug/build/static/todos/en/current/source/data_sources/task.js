// ==========================================================================
// Project:   Todos.TaskDataSource
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/

Todos.TaskDataSource = SC.DataSource.extend(
/** @scope Todos.TaskDataSource.prototype */ {

  // ..........................................................
  // QUERY SUPPORT
  // 

  fetch: function(store, query) {
    if (query === Todos.TASKS_QUERY) {
      SC.Request.getUrl('/tasks.json').header({'Accept': 'application/json'})
        .set('isJSON', YES)
        .notify(this, this._didFetchTasks, { store: store, query: query })
        .send();
    } else if (query === Todos.PROJECTS_QUERY) {
      SC.Request.getUrl('/projects.json').header({'Accept': 'application/json'})
        .set('isJSON', YES)
        .notify(this, this._didFetchProjects, { store: store, query: query })
        .send();
    }
    return YES;
  },
  
  _didFetchTasks: function(response, params) {
    var store = params.store;
    var query = params.query;
    if (SC.ok(response)) {
      var storeKeys = store.loadRecords(Todos.Task, response.get('body'));
      store.dataSourceDidFetchQuery(query);
    } else store.dataSourceDidErrorQuery(query, response);
  },
  _didFetchProjects: function(response, params) {
    var store = params.store;
    var query = params.query;
    if (SC.ok(response)) {
      var storeKeys = store.loadRecords(Todos.Project, response.get('body'));
      store.dataSourceDidFetchQuery(query);
    } else store.dataSourceDidErrorQuery(query, response);
  },
  
  // ..........................................................
  // RECORD SUPPORT
  // 
  
  retrieveRecord: function(store, storeKey) {
    
    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  createRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit new records to the data source.
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  updateRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },
  
  destroyRecord: function(store, storeKey) {
    
    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done
    
    return NO ; // return YES if you handled the storeKey
  }
  
}) ;; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('todos');