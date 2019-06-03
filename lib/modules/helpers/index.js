const _ = require('lodash');
const areas = require('./lib/areas');

module.exports = {
   extend: 'apostrophe-module',
   label: 'Helpers',
   alias: 'helpers',
   construct: function (self, options) {
      self.addHelpers({
         _find: (haystack, needle) => _.find(haystack, needle),
         _isObject: (data) => _.isObject(data),
         _isArray: (data) => _.isArray(data),
         _isString: (data) => _.isString(data),
         _shuffle: (array) => _.shuffle(array),
         _camelCase: (str) => _.camelCase(str),
         split: (str, sep) => str.split(sep),
         isJoin: (str) => {
            if (str.charAt(0) === '_') {
               return true;
            } else {
               return false;
            }
         },

         getOptions: function (field, name) {
            return _.find(field, {
               name: name
            })
         },

         baseStyles: _.clone(areas.baseStyles),
         baseToolbar: _.clone(areas.baseToolbar),
         widgets: _.clone(areas.widgets)
      });
   },
   // afterConstruct: function (self) {
   //    self.apos.adminBar.add('styleguide', 'Styleguide', 'admin');
   //    self.apos.adminBar.add('readme', 'README', 'admin');
   // }
};