import * as prismic from '@prismicio/client'

const repositoryName = 'portfolio_8703' // ton repo Prismic, exemple: 'monportfolio'

export const client = prismic.createClient(repositoryName, {
  // accessToken: 'TON_ACCESS_TOKEN', // si tu utilises un token privé
})
