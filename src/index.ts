import colors from './themes/colors'
import screen from './themes/screen'

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
export { Lottie, LottieProps, LottieToggle, LottieToggleProps } from './Lottie'
export { default as Modal } from './Modal'
export { default as VideoPlayer, VideoPlayerProps } from './VideoPlayer'
export {
  default as useColumns,
  calculateColumnOriginalIndex,
} from './hooks/useColumns'
export { default as getMedia, isLocalUrl, MediaType } from './helpers/getMedia'
export {
  flattenCustomerFiles,
  FlatCustomerFile,
  getFileExtension,
  getFileS3PathForAmplify,
} from './helpers/customerFiles'
export * from './graphql/types'
export * from './graphql/schema/mutations'
export * from './graphql/schema/queries'
