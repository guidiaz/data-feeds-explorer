import { gql } from 'apollo-server'

const typeDefs = gql`
  type Feed @entity {
    id: String! @id
    address: String! @column
    blockExplorer: String! @column
    color: String!
    feedFullName: String! @column
    label: String! @column
    name: String! @column
    network: String! @column
    lastResult: String
    deviation: String!
    heartbeat: String!
    finality: String!
    requests(timestamp: Int!): [ResultRequest]!
  }

  type Total {
    count: Int
  }

  type FeedsPage {
    feeds: [Feed]
    total: Int!
  }

  type ResultRequest @entity {
    id: String! @id
    drTxHash: String! @column
    error: String
    feedFullName: String! @column
    requestId: String! @column
    result: String! @column
    timestamp: String! @column
  }

  type Network @entity {
    id: String! @id
    label: String
  }

  # type DataRequest @entity(embedded: true) {
  #   retrieval: String! @column
  #   aggregation: String! @column
  #   tally: String! @column
  # }

  type Query {
    feed(feedFullName: String!): Feed
    feeds(page: Int!, pageSize: Int!, network: String): FeedsPage!
    requests(feedFullName: String!, page: Int!, size: Int!): [ResultRequest]!
    networks: [Network]!
  }
`

export default typeDefs
