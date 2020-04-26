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
    customerFiles.flatMap<FlatCustomerFile>(
      (customerFile) =>
        customerFile.output_result?.target_paths?.map((path) => ({
          bucket: customerFile.output_result?.target_bucket || undefined,
          file_path: path,
          file_name: path.split('/').pop(),
          file_id: customerFile.file_id,
          request_type: customerFile.request_type,
          request_timestamp: customerFile.request_timestamp,
          requester: customerFile.requester || undefined,
          customer_id: customerFile.customer_id,
          collection_id: customerFile.collection_id || undefined,
          collection_segment: customerFile.collection_segment || undefined,
          is_ready: customerFile.is_ready || undefined,
          type: customerFile.type || undefined,
          system_identifier: customerFile.system_identifier || undefined,
        })) || []
    ) || []
  )
}

export function getFileExtension(file_path: string): string | undefined {
  return file_path.toUpperCase().split('.').pop()
}
