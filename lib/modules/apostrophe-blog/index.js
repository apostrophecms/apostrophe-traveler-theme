module.exports = {
  addFields: [
    {
      name: 'lat',
      label: 'Latitude',
      type: 'float'
    },
    {
      name: 'lng',
      label: 'Longitude',
      type: 'float'
    },
    {
      name: 'address',
      label: 'Address',
      type: 'string'
    },
    {
      name: 'teaser',
      label: 'Article Teaser',
      type: 'singleton',
      contextual: true,
      widgetType: 'apostrophe-rich-text'
    },
    {
      name: 'thumbnail',
      label: 'Thumbnail',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        limit: [ 1 ]
      }
    }
  ],
  construct: function(self, options) {
    self.route('get', 'latlng', async (req, res) => {
      try {
        let projection = {
          lat: 1,
          lng: 1
        }
        let docs = await self.find(req, {}, projection).toArray()
        return res.status(200).json(docs);
      } catch (error) {
        console.log(error);
        
      }
    })
  }
}