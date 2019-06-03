const _ = require('lodash');

const baseToolbar = ['Styles', 'Bold', 'Italic', 'Link', 'Anchor', 'Unlink', 'Blockquote', 'NumberedList', 'BulletedList', 'Split'];
const baseStyles = [{
    name: 'Body Copy (P)',
    element: 'p',
    attributes: { class: 'o-body' }
  },
  {
    name: 'Heading (H3)',
    element: 'h3',
    attributes: { class: 'o-heading' }
  }
];

const widgets = {
  'apostrophe-rich-text': {
    styles: baseStyles,
    toolbar: baseToolbar,
  },
  'image': {},
};

// const projectWidgets = _.assign({
//   'mark-header': {},
//   'two-column': {}
// }, largeWidgets);

module.exports = {
  baseToolbar: baseToolbar,
  baseStyles: baseStyles,
  widgets: widgets
};