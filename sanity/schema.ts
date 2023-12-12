import { type SchemaTypeDefinition } from 'sanity'
import homepage from './schema/homepage'
import banner from './schema/banner'
import whatwedo from './schema/whatwedo'
import aboutpage from './schema/aboutpage'
import portfolio from './schema/portfolio'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage, aboutpage, portfolio, banner, whatwedo],
}
