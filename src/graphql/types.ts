export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  listBanners?: Maybe<BannerConnection>
  listCollectionsByPortfolioSection?: Maybe<CollectionConnection>
  listCollectionsByListingStatus?: Maybe<CollectionConnection>
  listCollectionsByCustomerId?: Maybe<CollectionConnection>
  showCollection?: Maybe<Collection>
  listCollectionAssets?: Maybe<CollectionAssetConnection>
  listPortfolioSections?: Maybe<PortfolioSectionConnection>
  showSlug?: Maybe<Slug>
  showProfile?: Maybe<Profile>
  listMessages?: Maybe<MessageConnection>
  showMessage?: Maybe<Message>
  listCustomers?: Maybe<CustomerConnection>
  showCustomer?: Maybe<Customer>
  showCustomerSelf?: Maybe<Customer>
  showLatestGoogleAnalyticsReport?: Maybe<GaReportSnapshot>
}

export type QueryListBannersArgs = {
  listing_status: Scalars['ID']
}

export type QueryListCollectionsByPortfolioSectionArgs = {
  portfolio_section_key: Scalars['String']
  next_token?: Maybe<Scalars['String']>
}

export type QueryListCollectionsByListingStatusArgs = {
  listing_status: Scalars['String']
  next_token?: Maybe<Scalars['String']>
}

export type QueryListCollectionsByCustomerIdArgs = {
  customer_id: Scalars['String']
  next_token?: Maybe<Scalars['String']>
}

export type QueryShowCollectionArgs = {
  collection_id: Scalars['ID']
}

export type QueryListCollectionAssetsArgs = {
  collection_id: Scalars['String']
  type?: Maybe<CollectionAssetType>
  next_token?: Maybe<Scalars['String']>
}

export type QueryListPortfolioSectionsArgs = {
  listing_status: Scalars['ID']
  next_token?: Maybe<Scalars['String']>
}

export type QueryShowSlugArgs = {
  type: SlugType
  slug: Scalars['ID']
}

export type QueryShowProfileArgs = {
  page_key: Scalars['ID']
}

export type QueryListMessagesArgs = {
  listing_status: Scalars['ID']
}

export type QueryShowMessageArgs = {
  message_id: Scalars['ID']
}

export type QueryListCustomersArgs = {
  listing_status: Scalars['ID']
}

export type QueryShowCustomerArgs = {
  customer_id: Scalars['ID']
}

export type QueryShowLatestGoogleAnalyticsReportArgs = {
  site: Scalars['ID']
}

export type BannerConnection = {
  __typename?: 'BannerConnection'
  items: Array<Banner>
  nextToken?: Maybe<Scalars['String']>
}

export type Banner = {
  __typename?: 'Banner'
  banner_id: Scalars['ID']
  listing_status?: Maybe<Scalars['String']>
  sort_key?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
  file?: Maybe<File>
}

export type File = {
  __typename?: 'File'
  owner?: Maybe<Scalars['String']>
  public_url?: Maybe<Scalars['String']>
  original_s3_key?: Maybe<Scalars['String']>
  contentType?: Maybe<Scalars['String']>
  is_ready?: Maybe<Scalars['Boolean']>
  customisation?: Maybe<FileCustomisation>
  poster?: Maybe<Scalars['String']>
}

export type FileCustomisation = {
  __typename?: 'FileCustomisation'
  backgroundPosition?: Maybe<Scalars['String']>
}

export type CollectionConnection = {
  __typename?: 'CollectionConnection'
  items: Array<Collection>
  nextToken?: Maybe<Scalars['String']>
}

export type Collection = {
  __typename?: 'Collection'
  collection_id: Scalars['ID']
  listing_status?: Maybe<Scalars['String']>
  sort_key?: Maybe<Scalars['String']>
  portfolio_section_key?: Maybe<Scalars['String']>
  portfolio_section?: Maybe<PortfolioSection>
  customer?: Maybe<Customer>
  customer_id?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  banner?: Maybe<File>
  hourly_price?: Maybe<Scalars['String']>
  duration_in_hour?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  slug?: Maybe<Scalars['String']>
  segments?: Maybe<Array<CollectionSegment>>
  photoCount?: Maybe<Scalars['Int']>
  videoCount?: Maybe<Scalars['Int']>
  active_customer_phase?: Maybe<CollectionCustomerPhase>
}

export type CollectionSegmentsArgs = {
  types?: Maybe<Array<CollectionAssetType>>
}

export type PortfolioSection = {
  __typename?: 'PortfolioSection'
  portfolio_section_key: Scalars['ID']
  listing_status?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  banner?: Maybe<File>
  sort_key?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  collections?: Maybe<CollectionConnection>
}

export type Customer = {
  __typename?: 'Customer'
  customer_id: Scalars['ID']
  listing_status?: Maybe<Scalars['String']>
  sort_key?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  instagram_username?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['String']>
  access_key?: Maybe<Scalars['String']>
  latestSession?: Maybe<Collection>
  sessions?: Maybe<CollectionConnection>
}

export type CollectionSegment = {
  __typename?: 'CollectionSegment'
  collection_id: Scalars['ID']
  type: CollectionAssetType
  assets?: Maybe<CollectionAssetConnection>
}

export enum CollectionAssetType {
  Image = 'IMAGE',
  ImageRaw = 'IMAGE_RAW',
  ImageRawSelected = 'IMAGE_RAW_SELECTED',
  Video = 'VIDEO',
  Unknown = 'UNKNOWN',
}

export type CollectionAssetConnection = {
  __typename?: 'CollectionAssetConnection'
  items: Array<CollectionAsset>
  nextToken?: Maybe<Scalars['String']>
}

export type CollectionAsset = {
  __typename?: 'CollectionAsset'
  asset_id: Scalars['ID']
  collection_id?: Maybe<Scalars['String']>
  listing_status?: Maybe<Scalars['String']>
  sort_key?: Maybe<Scalars['String']>
  file?: Maybe<File>
  type?: Maybe<CollectionAssetType>
  customer_id?: Maybe<Scalars['String']>
}

export enum CollectionCustomerPhase {
  PickRawAssets = 'PICK_RAW_ASSETS',
  EditingInProgress = 'EDITING_IN_PROGRESS',
  EditedAssetsReady = 'EDITED_ASSETS_READY',
}

export type PortfolioSectionConnection = {
  __typename?: 'PortfolioSectionConnection'
  items: Array<PortfolioSection>
  nextToken?: Maybe<Scalars['String']>
}

export type Slug = {
  __typename?: 'Slug'
  slug_key: Scalars['ID']
  slug: Scalars['String']
  type: SlugType
  value?: Maybe<SlugValue>
}

export enum SlugType {
  PortfolioSection = 'PortfolioSection',
  Collection = 'Collection',
}

export type SlugValue = SlugCollection | SlugPortfolioSection

export type SlugCollection = {
  __typename?: 'SlugCollection'
  collection_id: Scalars['String']
  collection?: Maybe<Collection>
}

export type SlugPortfolioSection = {
  __typename?: 'SlugPortfolioSection'
  portfolio_section_key: Scalars['String']
  portfolio_section?: Maybe<PortfolioSection>
}

export type Profile = {
  __typename?: 'Profile'
  page_key: Scalars['ID']
  type: ProfileType
  value?: Maybe<ProfileValue>
  file?: Maybe<File>
}

export enum ProfileType {
  AboutMe = 'AboutMe',
  LatestWorks = 'LatestWorks',
}

export type ProfileValue = ProfileAboutMe | ProfileLatestWorks

export type ProfileAboutMe = {
  __typename?: 'ProfileAboutMe'
  about_me_blurb?: Maybe<Scalars['String']>
  about_me_title?: Maybe<Scalars['String']>
  about_me_content?: Maybe<Scalars['String']>
}

export type ProfileLatestWorks = {
  __typename?: 'ProfileLatestWorks'
  items?: Maybe<Array<Maybe<LatestWorkCollection>>>
}

export type LatestWorkCollection = {
  __typename?: 'LatestWorkCollection'
  collection_id: Scalars['ID']
  sort_key?: Maybe<Scalars['String']>
  collection?: Maybe<Collection>
}

export type MessageConnection = {
  __typename?: 'MessageConnection'
  items: Array<Message>
  nextToken?: Maybe<Scalars['String']>
}

export type Message = {
  __typename?: 'Message'
  message_id: Scalars['ID']
  listing_status?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  reply_to?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  read_at?: Maybe<Scalars['String']>
}

export type CustomerConnection = {
  __typename?: 'CustomerConnection'
  items: Array<Customer>
  nextToken?: Maybe<Scalars['String']>
}

export type GaReportSnapshot = {
  __typename?: 'GAReportSnapshot'
  site: Scalars['ID']
  timestamp: Scalars['ID']
  reports?: Maybe<Array<Maybe<GaReportResponse>>>
}

export type GaReportResponse = {
  __typename?: 'GAReportResponse'
  columnHeader?: Maybe<GaColumnHeader>
  data?: Maybe<GaReportData>
  id?: Maybe<Scalars['String']>
}

export type GaColumnHeader = {
  __typename?: 'GAColumnHeader'
  dimensions?: Maybe<Array<Maybe<Scalars['String']>>>
  metricHeader?: Maybe<GaMetricHeader>
}

export type GaMetricHeader = {
  __typename?: 'GAMetricHeader'
  metricHeaderEntries?: Maybe<Array<Maybe<GaMetricHeaderEntry>>>
}

export type GaMetricHeaderEntry = {
  __typename?: 'GAMetricHeaderEntry'
  name?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type GaReportData = {
  __typename?: 'GAReportData'
  rows?: Maybe<Array<Maybe<GaReportDataRow>>>
  totals?: Maybe<Array<Maybe<GaReportDataValue>>>
}

export type GaReportDataRow = {
  __typename?: 'GAReportDataRow'
  dimensions?: Maybe<Array<Maybe<Scalars['String']>>>
  metrics?: Maybe<Array<Maybe<GaReportDataValue>>>
}

export type GaReportDataValue = {
  __typename?: 'GAReportDataValue'
  values?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type Mutation = {
  __typename?: 'Mutation'
  createBanner: Banner
  updateBanner?: Maybe<Banner>
  sortBanner?: Maybe<Banner>
  deleteBanner?: Maybe<Banner>
  createCollection: Collection
  updateCollection?: Maybe<Collection>
  updateCollectionActiveCustomerPhase?: Maybe<Collection>
  sortCollection?: Maybe<Collection>
  deleteCollection?: Maybe<Collection>
  createCollectionAsset: CollectionAsset
  sortCollectionAsset?: Maybe<CollectionAsset>
  deleteCollectionAssets?: Maybe<Array<Maybe<CollectionAsset>>>
  createPortfolioSection: PortfolioSection
  updatePortfolioSection?: Maybe<PortfolioSection>
  sortPortfolioSection?: Maybe<PortfolioSection>
  deletePortfolioSection?: Maybe<PortfolioSection>
  updateSlug: Slug
  saveProfile?: Maybe<Profile>
  createMessage?: Maybe<Message>
  readMessage?: Maybe<Message>
  deleteMessage?: Maybe<Message>
  createCustomer: Customer
  updateCustomer?: Maybe<Customer>
  deleteCustomer?: Maybe<Customer>
  requestCustomerFile: CustomerFile
  customerSelectAsset: CollectionAsset
  customerDeselectAsset?: Maybe<CollectionAsset>
}

export type MutationCreateBannerArgs = {
  input: BannerInput
}

export type MutationUpdateBannerArgs = {
  banner_id: Scalars['ID']
  input: BannerInput
}

export type MutationSortBannerArgs = {
  banner_id: Scalars['ID']
  sort_key: Scalars['String']
}

export type MutationDeleteBannerArgs = {
  banner_id: Scalars['ID']
}

export type MutationCreateCollectionArgs = {
  input: CollectionInput
}

export type MutationUpdateCollectionArgs = {
  collection_id: Scalars['ID']
  input: CollectionInput
}

export type MutationUpdateCollectionActiveCustomerPhaseArgs = {
  collection_id: Scalars['ID']
  input: CollectionActiveCustomerPhaseInput
}

export type MutationSortCollectionArgs = {
  collection_id: Scalars['ID']
  sort_key: Scalars['String']
}

export type MutationDeleteCollectionArgs = {
  collection_id: Scalars['ID']
}

export type MutationCreateCollectionAssetArgs = {
  input: CollectionAssetInput
}

export type MutationSortCollectionAssetArgs = {
  asset_id: Scalars['ID']
  sort_key: Scalars['String']
}

export type MutationDeleteCollectionAssetsArgs = {
  asset_ids: Array<Scalars['ID']>
}

export type MutationCreatePortfolioSectionArgs = {
  input: PortfolioSectionInput
}

export type MutationUpdatePortfolioSectionArgs = {
  portfolio_section_key: Scalars['ID']
  input: PortfolioSectionInput
}

export type MutationSortPortfolioSectionArgs = {
  portfolio_section_key: Scalars['ID']
  sort_key: Scalars['String']
}

export type MutationDeletePortfolioSectionArgs = {
  portfolio_section_key: Scalars['ID']
}

export type MutationUpdateSlugArgs = {
  input: SlugInput
}

export type MutationSaveProfileArgs = {
  page_key: Scalars['ID']
  input: ProfileInput
}

export type MutationCreateMessageArgs = {
  input: MessageInput
}

export type MutationReadMessageArgs = {
  message_id: Scalars['ID']
}

export type MutationDeleteMessageArgs = {
  message_id: Scalars['ID']
}

export type MutationCreateCustomerArgs = {
  input: CustomerInput
}

export type MutationUpdateCustomerArgs = {
  customer_id: Scalars['ID']
  input: CustomerInput
}

export type MutationDeleteCustomerArgs = {
  customer_id: Scalars['ID']
}

export type MutationRequestCustomerFileArgs = {
  customer_id: Scalars['ID']
  input: CustomerFileInput
}

export type MutationCustomerSelectAssetArgs = {
  input: CustomerSelectAssetInput
}

export type MutationCustomerDeselectAssetArgs = {
  asset_id: Scalars['ID']
}

export type BannerInput = {
  listing_status?: Maybe<Scalars['String']>
  sort_key?: Maybe<Scalars['String']>
  link?: Maybe<Scalars['String']>
}

export type CollectionInput = {
  title: Scalars['String']
  listing_status: Scalars['String']
  description?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  portfolio_section_key?: Maybe<Scalars['String']>
  customer_id?: Maybe<Scalars['String']>
  sort_key?: Maybe<Scalars['String']>
  hourly_price?: Maybe<Scalars['String']>
  duration_in_hour?: Maybe<Scalars['String']>
}

export type CollectionActiveCustomerPhaseInput = {
  active_customer_phase?: Maybe<CollectionCustomerPhase>
}

export type CollectionAssetInput = {
  collection_id: Scalars['String']
  sort_key?: Maybe<Scalars['String']>
  type?: Maybe<CollectionAssetType>
  customer_id?: Maybe<Scalars['String']>
}

export type PortfolioSectionInput = {
  listing_status?: Maybe<Scalars['String']>
  name: Scalars['String']
  sort_key?: Maybe<Scalars['String']>
}

export type SlugInput = {
  slug: Scalars['String']
  type: SlugType
  resource?: Maybe<Scalars['String']>
}

export type ProfileInput = {
  type: ProfileType
  about_me?: Maybe<AboutMeInput>
  latest_works?: Maybe<LatestWorksInput>
}

export type AboutMeInput = {
  about_me_blurb?: Maybe<Scalars['String']>
  about_me_title?: Maybe<Scalars['String']>
  about_me_content?: Maybe<Scalars['String']>
}

export type LatestWorksInput = {
  items?: Maybe<Array<Maybe<LatestWorksCollectionInput>>>
}

export type LatestWorksCollectionInput = {
  collection_id: Scalars['ID']
  sort_key?: Maybe<Scalars['String']>
}

export type MessageInput = {
  listing_status?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  reply_to?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
}

export type CustomerInput = {
  email: Scalars['String']
  access_key?: Maybe<Scalars['String']>
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  instagram_username?: Maybe<Scalars['String']>
}

export type CustomerFile = {
  __typename?: 'CustomerFile'
  file_id: Scalars['ID']
  request_type: CustomerFileRequestType
  request_timestamp: Scalars['String']
  requester?: Maybe<Scalars['String']>
  customer_id: Scalars['String']
  is_ready?: Maybe<Scalars['Boolean']>
  output_result?: Maybe<CustomerFileOutputResult>
  output_option?: Maybe<CustomerFileOutputOption>
  input_option: CustomerFileInputOption
}

export enum CustomerFileRequestType {
  Zip = 'ZIP',
  Copy = 'COPY',
}

export type CustomerFileOutputResult = {
  __typename?: 'CustomerFileOutputResult'
  finished_timestamp?: Maybe<Scalars['String']>
  target_bucket?: Maybe<Scalars['String']>
  target_paths?: Maybe<Array<Scalars['String']>>
  error?: Maybe<Scalars['String']>
}

export type CustomerFileOutputOption = {
  __typename?: 'CustomerFileOutputOption'
  zip_file_name?: Maybe<Scalars['String']>
  additional_path?: Maybe<Scalars['String']>
}

export type CustomerFileInputOption = {
  __typename?: 'CustomerFileInputOption'
  original_paths: Array<Scalars['String']>
}

export type CustomerFileInput = {
  request_type: CustomerFileRequestType
  output_option?: Maybe<CustomerFileOutputOptionInput>
  input_option: CustomerFileInputOptionInput
}

export type CustomerFileOutputOptionInput = {
  zip_file_name?: Maybe<Scalars['String']>
  additional_path?: Maybe<Scalars['String']>
}

export type CustomerFileInputOptionInput = {
  original_paths: Array<Scalars['String']>
}

export type CustomerSelectAssetInput = {
  asset_id: Scalars['String']
  sort_key: Scalars['String']
  type: CollectionAssetType
}

export enum BannerType {
  Video = 'video',
  Photo = 'photo',
}

export type CustomerFileConnection = {
  __typename?: 'CustomerFileConnection'
  items: Array<CustomerFile>
  nextToken?: Maybe<Scalars['String']>
}
