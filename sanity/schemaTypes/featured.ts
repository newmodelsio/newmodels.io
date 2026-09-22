import { defineField, defineType } from 'sanity'

export const featured = defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [

    defineField({
      name: 'Image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
})