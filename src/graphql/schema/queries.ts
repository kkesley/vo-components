import { loader } from 'graphql.macro'

export const LIST_BANNERS = loader('./listBanners.graphql')
export const LIST_PORTFOLIO_SECTIONS = loader('./listPortfolioSections.graphql')
export const LIST_COLLECTIONS_BY_LISTING_STATUS = loader(
  './listCollectionsByListingStatus.graphql'
)
export const LIST_COLLECTION_ASSETS = loader('./listCollectionAssets.graphql')
export const SHOW_SLUG = loader('./showSlug.graphql')
export const CHECK_SLUG_EXISTENCE = loader('./checkSlugExistence.graphql')
export const SHOW_PROFILE = loader('./showProfile.graphql')
export const LIST_CUSTOMERS = loader('./listCustomers.graphql')
export const SHOW_CUSTOMER = loader('./showCustomer.graphql')
export const SHOW_LATEST_GOOGLE_ANALYTICS_REPORT = loader(
  './showLatestGoogleAnalyticsReport.graphql'
)
export const SHOW_CUSTOMER_SELF = loader('./showCustomerSelf.graphql')
export const LIST_COLLECTION_MESSAGES = loader(
  './listCollectionMessages.graphql'
)
