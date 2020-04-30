import {
  CustomerFile,
  CustomerFileRequestType,
  CollectionAssetType,
  CustomerFileType,
  CustomerFileTypeSystemIdentifier,
} from 'graphql/types'

export interface FlatCustomerFile {
  bucket?: string
  file_path: string
  file_name: string | undefined
  file_id: string
  request_type: CustomerFileRequestType
  request_timestamp: string
  requester?: string
  customer_id: string
  collection_id?: string
  collection_segment?: CollectionAssetType
  is_ready?: boolean
  type?: CustomerFileType
  system_identifier?: CustomerFileTypeSystemIdentifier
}

export function flattenCustomerFiles(
  customerFiles: CustomerFile[]
): FlatCustomerFile[] {
  return (
    customerFiles.flatMap<FlatCustomerFile>((customerFile) => {
      const customerFileCommon = {
        bucket: customerFile.output_result?.target_bucket || undefined,
        file_id: customerFile.file_id,
        request_type: customerFile.request_type,
        request_timestamp: customerFile.request_timestamp,
        requester: customerFile.requester || undefined,
        customer_id: customerFile.customer_id,
        collection_id: customerFile.collection_id || undefined,
        collection_segment: customerFile.collection_segment || undefined,
        is_ready: customerFile.is_ready || false,
        type: customerFile.type || undefined,
        system_identifier: customerFile.system_identifier || undefined,
      }
      if (customerFile.is_ready) {
        return (
          customerFile.output_result?.target_paths?.map((path) => ({
            ...customerFileCommon,
            file_path: path,
            file_name: path.split('/').pop(),
          })) || []
        )
      } else {
        return [
          {
            ...customerFileCommon,
            file_path: '',
            file_name: '',
          },
        ]
      }
    }) || []
  )
}

export function getFileExtension(file_path: string): string | undefined {
  return file_path.toUpperCase().split('.').pop()
}

export function getFileS3PathForAmplify(file_path: string) {
  // file path: protected/[customer:id]/[input-path]/[filename]
  // we want to get [input-path]/filename because Amplify.Storage automatically adds the first 2 paths
  // Therefore, we have to remove the first 2 parts of the original path
  return file_path.split('/').slice(2).join('/')
}
