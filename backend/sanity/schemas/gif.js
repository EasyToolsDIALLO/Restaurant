export default {
    name: 'gif',
    title: 'Gif',
    type: 'document',
    fields: [
      {
        name: 'imagegif',
        title: 'Image Gif',
        type: 'image',
        validation: (Rule)=>Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
        validation: (Rule)=>Rule.required()
      }
    ]
}