var path = require('path');

var apos = require('apostrophe')({
  shortName: 'traveler',
  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'helpers': {},

    'apostrophe-blog': {},
    'apostrophe-blog-pages': {}
  }
});
