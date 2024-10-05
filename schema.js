export const typeDefs = `#graphql
  type Game {
    id: ID!
    name: String!
    description: String!
    price: Float!
    discount: Int
    discountedPrice: Float
    tags: [String!]
    wishlist: Boolean!
    developer: String!
    publisher: String
    releaseDate: String!
    rating: Float!
    platform: [String!]!
    images: images!
  }

  type images {
    logo: String!
    bannerLandscape: String!
    bannerPortrait: String!
    bannerSquare: String!
  }

  type Query{
    games: [Game]
  }
`