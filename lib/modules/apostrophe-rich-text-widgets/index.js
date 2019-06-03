module.exports = {
  sanitizeHtml: {
    allowedClasses: {
      '*': ['o-heading', 'o-meta', 'o-body']
    },
    allowedTags: [
      'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a',
      'ul', 'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code',
      'hr', 'br', 'div',
      'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre'
    ],
    allowedSchemes: ['http', 'https', 'ftp', 'mailto', 'tel']
  }
};