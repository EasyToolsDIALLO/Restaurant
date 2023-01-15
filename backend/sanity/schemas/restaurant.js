export default {
    name: 'restaurant',
    title: 'Restaurant',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Title',
        type: 'string',
        validation: (Rule)=>Rule.required()
      },
      {
        name: 'short_description',
        title: 'short description',
        type: 'string',
        validation: (Rule)=>Rule.max(200)
      },
      {
        name: 'image',
        title: 'Image of the restaurant',
        type: 'image',
      },
      {
        name: 'genre',
        title: 'Genre',
        type: 'string',
      },
      {
        name: 'Lat',
        title: 'Latitude of the restaurant',
        type: 'number',
      },
      {
        name: 'Long',
        title: 'Longitude of the restaurant',
        type: 'number',
      },
      {
        name: 'address',
        title: 'Restaurant address',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'rating',
        title: 'Enter a rating between 1-5 stars',
        type: 'number',
        validation: (Rule) => Rule.required()
                      .min(1).max(5)
                      .error("Please enter a value between 1 and 5")
      },
      {
        name: 'type',
        title: 'Category',
        validation: (Rule)=>Rule.required(),
        type: "reference",
        to: [{type: "category"}],
      },
      {
        name: 'dishes',
        title: 'Dishes',
        type: 'array',
        of: [{ type:"reference", to:[{ type:"dish"}]}]
      }
      
    ],
  
  }
  