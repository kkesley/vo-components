import { useWindowSize } from 'react-use'
import { useMemo } from 'react'
import screen from '../themes/screen'

interface ColumnCount {
  phone: number
  tablet: number
  desktop: number
}

interface UsePhotoChunksParams<T> {
  items: T[]
  columnOverride?: ColumnCount
}

interface UsePhotoChunksResult<T> {
  chunkedItems: T[][]
  columnCount: number
}

export default function useColumns<T>({
  items,
  columnOverride,
}: UsePhotoChunksParams<T>): UsePhotoChunksResult<T> {
  const size = useWindowSize()
  const columnCount = useMemo(() => {
    if (size.width >= screen.desktop.minWidth) {
      // desktop has 3 columns
      return columnOverride?.desktop || 3
    }
    if (size.width >= screen.tablet.minWidth) {
      // tablet has 2 columns
      return columnOverride?.tablet || 2
    }
    // phone has 1 column
    return columnOverride?.phone || 1
  }, [size.width, columnOverride])

  const chunkedItems = useMemo<T[][]>(() => {
    const results = new Array(columnCount).fill([])
    items.forEach((item, index) => {
      const targetIndex = index % columnCount
      results[targetIndex] = [...results[targetIndex], item]
    })
    return results
  }, [columnCount, items])
  return { chunkedItems, columnCount }
}

export function calculateColumnOriginalIndex(
  columnIndex: number,
  itemIndex: number,
  columnCount: number
): number {
  return itemIndex * columnCount + columnIndex
}
