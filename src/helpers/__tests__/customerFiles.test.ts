import { flattenCustomerFiles, getFileExtension } from '../customerFiles'
import {
  CustomerFile,
  CustomerFileRequestType,
  CollectionAssetType,
  CustomerFileType,
  CustomerFileTypeSystemIdentifier,
} from '../../graphql/types'

describe('flattenCustomerFiles', () => {
  const customerFiles: CustomerFile[] = [
    {
      file_id: 'file-a',
      request_type: CustomerFileRequestType.Zip,
      request_timestamp: '2020-01-01 02:02',
      requester: 'kendrick',
      customer_id: 'customer-a',
      collection_id: 'collection-a',
      collection_segment: CollectionAssetType.Image,
      is_ready: true,
      output_result: {
        target_bucket: 'some-bucket',
        target_paths: [
          'protected/customer-a/misc/abc.jpg',
          'protected/customer-a/misc/cde.zip',
        ],
      },
      input_option: {
        original_paths: ['abc.jpg'],
      },
      type: CustomerFileType.SystemGenerated,
      system_identifier: CustomerFileTypeSystemIdentifier.ZipAll,
    },
    {
      file_id: 'file-b',
      request_type: CustomerFileRequestType.Zip,
      request_timestamp: '2020-01-01 02:02',
      requester: 'veronica',
      customer_id: 'customer-b',
      collection_id: 'collection-b',
      collection_segment: CollectionAssetType.ImageRaw,
      is_ready: true,
      output_result: {
        target_paths: ['protected/customer-b/misc/pop.zip'],
      },
      input_option: {
        original_paths: ['abc.jpg'],
      },
      type: CustomerFileType.UserDefined,
    },
    {
      file_id: 'file-c',
      request_type: CustomerFileRequestType.Zip,
      request_timestamp: '2020-01-01 02:02',
      requester: 'kendrick again',
      customer_id: 'customer-c',
      collection_id: 'collection-c',
      collection_segment: CollectionAssetType.ImageRawSelected,
      is_ready: true,
      output_result: {
        target_paths: [],
      },
      input_option: {
        original_paths: ['abc.jpg'],
      },
      type: CustomerFileType.UserDefined,
    },
  ]
  it('retuns the correct customer files', () => {
    expect(flattenCustomerFiles(customerFiles)).toMatchSnapshot()
  })
})

describe('getFileExtension', () => {
  const testCases = [
    {
      path: 'a/b/c/abc.jpg',
      extension: 'JPG',
    },
    {
      path: 'a/b/c/abc.zip',
      extension: 'ZIP',
    },
    {
      path: 'abc.ZiP',
      extension: 'ZIP',
    },
  ]
  testCases.forEach((testCase) => {
    it(`returns the correct extension for ${testCase.path}`, () => {
      expect(getFileExtension(testCase.path)).toEqual(testCase.extension)
    })
  })
})
