export default {
    name: 'featured',
    title: 'featured menu categories',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'featured category name',
        type: 'string',
        validation: (Rule)=> Rule.required(),
      },
      {
        name: 'short_description',
        title: 'Short description',
        type: 'string',
        validation: (Rule)=> Rule.required(),
      },
      {
        name: 'restaurants',
        title: 'Restaurants',
        type: 'array',
        of: [{ type:"reference", to:[{ type:"restaurant"}]}]
      },
      {
        name: 'image',
        title: 'Image of dish',
        type: 'image',
      }
    ]
  }
  