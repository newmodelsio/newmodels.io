import { defineField, defineType } from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [

    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'bioImage',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'email',
    }),
    defineField({
      name: 'clients',
      title: 'Clients',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})