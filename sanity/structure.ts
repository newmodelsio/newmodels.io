import type { StructureResolver } from 'sanity/structure'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

export const structure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Featured Post')
        .child(
          S.document()
            .schemaType('featured') // must match your schema name
            .documentId('featured') // fixed ID = only one page
        ),
      orderableDocumentListDeskItem({ type: 'column', title: 'Columns', S, context }),
      S.listItem()
        .title('About')
        .child(
          S.document()
            .schemaType('about') // must match your schema name
            .documentId('about') // fixed ID = only one page
        ),
      S.listItem()
        .title('Newsstand')
        .child(
          S.document()
            .schemaType('newsstand') // must match your schema name
            .documentId('newsstand') // fixed ID = only one page
        ),
      S.listItem()
        .title('Footer')
        .child(
          S.document()
            .schemaType('footer') // must match your schema name
            .documentId('footer') // fixed ID = only one page
        ),
    ])
