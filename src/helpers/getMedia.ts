export enum MediaType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  UNKNOWN = 'UNKNOWN',
}
export default function getMedia(contentType: string): MediaType {
  if (contentType.startsWith('image')) return MediaType.IMAGE
  if (contentType.startsWith('video')) return MediaType.VIDEO
  return MediaType.UNKNOWN
}

export function isLocalUrl(url: string): boolean {
  return url.startsWith('blob:')
}
