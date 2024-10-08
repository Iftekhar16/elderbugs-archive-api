export const typeDefs = `#graphql
  type Game {
    id: ID!
    name: String!
    description: String!
    price: Float
    discount: Float
    discountedPrice: Float
    tags: [String!]
    isWishlisted: Boolean!
    isAddedToCart: Boolean!
    wishlistCount: Int!
    isFeatured: Boolean!
    isTrending: Boolean!
    isFeaturedFranchise: Boolean!
    developer: String!
    publisher: String
    releaseDate: String
    rating: Float
    platform: [String!]
    reviews: review
    images: images
  }

  type review {
    reviewerName: String!
    reviewDescription: String!
    reviewRating: Float!
  }

  type images {
    logo: String
    bannerLandscape: String
    bannerPortrait: String
    bannerSquare: String
    screenshot: screenshot
  }

  type screenshot {
    screenshot1: String
    screenshot2: String
    screenshot3: String
    screenshot4: String
    screenshot5: String
  }

  type Query{
    games: [Game]
  }
`