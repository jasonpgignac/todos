// ==========================================================================
// Project:   Todos.taskController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/

Todos.taskController = SC.ObjectController.create(function() {
  
  var RELATIVE_PATH_TO_FORM = "mainPage.mainPane.middleView.bottomRightView";
  var PATH_TO_FORM = "Todos." + RELATIVE_PATH_TO_FORM;
  var REGEX_MATCH_PROJECT_CODE = /[a-z]{3}-[a-z]{3}/i;
  
  var loadForm = function() {
    return Todos.getPath(RELATIVE_PATH_TO_FORM);
  }
  var projectCodeText = function() {
    return loadForm().get("projectCodeText");
  }
  
  return {
    contentBinding: SC.Binding.single('Todos.tasksArrayController.selection'),
    isSaveOk: NO,
    projectCodeMessage: "message goes here",
    isProjectCodeMessageOn: NO,
  
    saveTask: function() {
      var taskRecord = this.get("content");
      if (this.validateProjectCodeField()) {
        taskRecord.commitRecord();
      }
    },
  
    observeRecordState: function() {
      var taskRecord = this.get("content");
      if (  taskRecord.get("status") === SC.Record.READY_DIRTY ||
            taskRecord.get("status") === SC.Record.READY_NEW ) {
        this.set("isSaveOk", YES);
      } else {
        this.set("isSaveOk", NO);
      };
      this.clearValidationMessages();
    }.observes("*content.status"),
    
    clearValidationMessages: function() {
      this.set("projectCodeMessage", "");
      this.set("isProjectCodeMessageOn", NO)
    },
    
    validateProjectCodeField: function() {
      var taskRecord = this.get("content");
      if (!taskRecord) {
        return YES;
      }
      var projectCode = taskRecord.get("projectCode");
      if(projectCode) {
        if(!projectCode.match(REGEX_MATCH_PROJECT_CODE)) {
          this.set("projectCodeMessage", "invalid project code: must be 3 letters dash 3 letters");
          this.set("isProjectCodeMessageOn", YES);
          return NO;
        } else {
          this.clearValidationMessages();
          return YES;
        }
      } else {
        return YES;
      }
    },
    
    observeProjectCodeKeyResponder: function() {
      var component = projectCodeText();
      if (component.get("isKeyResponder")==NO) {
        this.validateProjectCodeField();
      }
    }.observes(PATH_TO_FORM + ".projectCodeText.isKeyResponder")
  }
} () );
