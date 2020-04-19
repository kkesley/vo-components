import colors from './themes/colors'
import screen from './themes/screen'
import * as types from './graphql/types'
import * as mutations from './graphql/schema/mutations'
import * as queries from './graphql/schema/queries'

export const graphql = { types, mutations, queries }
export const Theme = { colors, screen }
export { default as DropdownMenu, DropdownMenuProps } from './DropdownMenu'
export {
  default as DynamicImage,
  getDynamicImageURL,
  ImageSize,
  DynamicImageProps,
  DynamicImageURLArgs,
  ResponsiveConfig,
} from './DynamicImage'
export {
  default as Lightbox,
  LightboxProvider,
  LightboxProps,
} from './Lightbox'
export { default as Lottie, LottieProps } from './Lottie'
export { default as Modal } from './Modal'
export { default as VideoPlayer, VideoPlayerProps } from './VideoPlayer'
export {
  default as useColumns,
  calculateColumnOriginalIndex,
} from './hooks/useColumns'
export { default as getMedia, isLocalUrl, MediaType } from './helpers/getMedia'
