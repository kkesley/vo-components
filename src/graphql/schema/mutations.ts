import { loader } from 'graphql.macro'

export const CREATE_BANNER = loader('./createBanner.graphql')
export const UPDATE_BANNER = loader('./updateBanner.graphql')
export const SORT_BANNER = loader('./sortBanner.graphql')
export const DELETE_BANNER = loader('./deleteBanner.graphql')
export const CREATE_PORTFOLIO_SECTION = loader(
  './createPortfolioSection.graphql'
)
export const UPDATE_PORTFOLIO_SECTION = loader(
  './updatePortfolioSection.graphql'
)
export const SORT_PORTFOLIO_SECTION = loader('./sortPortfolioSection.graphql')
export const DELETE_PORTFOLIO_SECTION = loader(
  './deletePortfolioSection.graphql'
)
export const CREATE_COLLECTION = loader('./createCollection.graphql')
export const UPDATE_COLLECTION = loader('./updateCollection.graphql')
export const SORT_COLLECTION = loader('./sortCollection.graphql')
export const DELETE_COLLECTION = loader('./deleteCollection.graphql')
export const CREATE_COLLECTION_ASSET = loader('./createCollectionAsset.graphql')
export const SORT_COLLECTION_ASSET = loader('./sortCollectionAsset.graphql')
export const DELETE_COLLECTION_ASSETS = loader(
  './deleteCollectionAssets.graphql'
)
export const UPDATE_SLUG = loader('./updateSlug.graphql')
export const SAVE_PROFILE = loader('./saveProfile.graphql')
export const CREATE_CUSTOMER = loader('./createCustomer.graphql')
export const UPDATE_CUSTOMER = loader('./updateCustomer.graphql')
export const DELETE_CUSTOMER = loader('./deleteCustomer.graphql')
export const SEND_MESSAGE = loader('./sendMessage.graphql')
