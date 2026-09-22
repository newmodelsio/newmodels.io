import { defineField, defineType } from 'sanity'
import { orderRankField } from '@sanity/orderable-document-list'

export const column = defineType({
  name: 'column',
  title: 'Column',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'section',
          title: 'Section',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),

            defineField({
              name: 'posts',
              title: 'Posts',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'post',
                  title: 'Post',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'string',
                    }),

                    defineField({
                      name: 'url',
                      title: 'URL',
                      type: 'url',
                    }),

                    defineField({
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                      options: {
                        hotspot: true,
                      },
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'title',
                      media: 'image',
                    },
                  },
                },
              ],
            }),
            defineField({
              name: 'body',
              title: 'Text',
              type: 'array',
              of: [{ type: 'block' }],
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    }),
    orderRankField({ type: 'column' }),
  ],
})