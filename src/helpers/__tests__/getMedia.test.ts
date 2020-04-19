import getMedia, { isLocalUrl, MediaType } from '../getMedia'

describe('getMedia', () => {
  const testCases = [
    {
      contentType: 'video/mp4',
      expectedMedia: MediaType.VIDEO,
    },
    {
      contentType: 'video/anything',
      expectedMedia: MediaType.VIDEO,
    },
    {
      contentType: 'image/jpeg',
      expectedMedia: MediaType.IMAGE,
    },
    {
      contentType: 'image/gif',
      expectedMedia: MediaType.IMAGE,
    },
    {
      contentType: 'image/anything',
      expectedMedia: MediaType.IMAGE,
    },
    {
      contentType: 'weird/mp4',
      expectedMedia: MediaType.UNKNOWN,
    },
    {
      contentType: 'weird',
      expectedMedia: MediaType.UNKNOWN,
    },
  ]
  testCases.forEach((testCase) => {
    it(`correctly returns media type for ${testCase.contentType}`, () => {
      expect(getMedia(testCase.contentType)).toEqual(testCase.expectedMedia)
    })
  })
})

describe('isLocalUrl', () => {
  const testCases = [
    {
      url: 'blob://some-file',
      expectedResult: true,
    },
    {
      url: 'https://abc.com/video.mp4',
      expectedResult: false,
    },
  ]
  testCases.forEach((testCase) => {
    it(`returns the correct result for ${testCase.url}`, () => {
      expect(isLocalUrl(testCase.url)).toEqual(testCase.expectedResult)
    })
  })
})
