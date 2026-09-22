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
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Text',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'Url',
              type: 'url',
            }),
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'url',
            },
          },
        },
      ],
    }),
  ],
})