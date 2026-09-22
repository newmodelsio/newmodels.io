import { type SchemaTypeDefinition } from 'sanity'

import { featured } from './featured'
import { about } from './about'
import { column } from './column'
import { newsstand } from './newsstand'
import { footer } from './footer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [featured, about, column, newsstand, footer],
}
