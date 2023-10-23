/* 
 * Main scripting file *
 * @version 1.01
 */

(function(mainINIT, $, undefined) {
  'use strict';
  /* Logging function, for debugging mode */
  $.log = function(message) {
      if (mainINIT.config.debug && (typeof window.console !== 'undefined' && typeof window.console.log !== 'undefined') && console.debug) {
          console.debug(message);
      }
      /*else {
          alert(message);
      }*/
  };
  
  $.toType = (function toType(global) {
      return function(obj) {
          if (obj === global) {
              return 'global';
          }
          return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
      };
  }(this));/* typeof fix */
  /**
   * Assign window.mainINIT if it is not assigned in the global namespace */
}(window.mainINIT = window.mainINIT || {}, jQuery));