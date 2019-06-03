// This configures the apostrophe-assets module to push a 'site.less'
// stylesheet by default, and to use jQuery 3.x

module.exports = {
  jQuery: 3,
  stylesheets: [
    {
      name: 'site'
    }
  ],
  scripts: [
    { name: 'vendor/leaflet' },
    { name: 'vendor/fancybox' },
    { name: 'modules/map' },
    { name: 'modules/lightbox' },
    { name: 'site' },
  ]
};
