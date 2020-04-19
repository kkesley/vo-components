import React from 'react'
import useColumns, {
  calculateColumnOriginalIndex,
} from '../src/hooks/useColumns'

export default {
  title: 'useColumns',
}

const items = new Array(1000).fill(null).map((_, index) => `item ${index}`)

export const Default = () => {
  const { chunkedItems, columnCount } = useColumns({ items })
  return (
    <div className="container">
      <p>Registered column: {columnCount}</p>
      <div className="columns is-multiline">
        {chunkedItems.map((chunk, chunkIndex) => (
          <div className="column is-4 is-6-tablet">
            {chunk.map((item, itemIndex) => (
              <div className="card">
                <div className="card-content">
                  <p>{item}</p>
                  <p>
                    Original Index:&nbsp;
                    {calculateColumnOriginalIndex(
                      chunkIndex,
                      itemIndex,
                      columnCount
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export const ColumnOverride = () => {
  const { chunkedItems, columnCount } = useColumns({
    items,
    columnOverride: { desktop: 6, tablet: 4, phone: 2 },
  })
  return (
    <div className="container">
      <p>Registered column: {columnCount}</p>
      <div className="columns is-multiline is-mobile">
        {chunkedItems.map((chunk, chunkIndex) => (
          <div className="column is-6-mobile is-3-tablet is-2-desktop">
            {chunk.map((item, itemIndex) => (
              <div className="card">
                <div className="card-content">
                  <p>{item}</p>
                  <p>
                    Original Index:&nbsp;
                    {calculateColumnOriginalIndex(
                      chunkIndex,
                      itemIndex,
                      columnCount
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
