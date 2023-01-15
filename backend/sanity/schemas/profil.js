export default {
    name: 'profil',
    title: 'Profil',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Profil Image',
        type: 'image',
        validation: (Rule)=>Rule.required()
      },
      {
        name: 'name',
        title: 'Profil',
        type: 'string',
        validation: (Rule)=>Rule.required()
      }
    ]
}