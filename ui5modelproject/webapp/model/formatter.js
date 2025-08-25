sap.ui.define([], function() {
  "use strict";
  return {
    //getCTC formatter for my View
    getCTC: function(salary) {
      return salary * 12 + salary / 10;
    },
    // Additional formatter functions can be added here

  };
});