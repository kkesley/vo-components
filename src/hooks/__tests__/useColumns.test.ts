import { act, renderHook } from '@testing-library/react-hooks'
import useColumns, { calculateColumnOriginalIndex } from '../useColumns'
import screen from '../../themes/screen'

const originalInnerWidth = window.innerWidth
const changeInnerWidth = (value: number) =>
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value,
  })
const revert = () => changeInnerWidth(originalInnerWidth)

describe('useColumns', () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  afterEach(() => {
    act(() => {
      revert()
    })
  })
  describe('Default columnCount', () => {
    const testCases = [
      {
        label: 'phone',
        width: screen.phone.maxWidth,
        expectedColumn: 1,
        expectedResults: [items],
      },
      {
        label: 'tablet',
        width: screen.tablet.minWidth,
        expectedColumn: 2,
        expectedResults: [
          [1, 3, 5, 7, 9],
          [2, 4, 6, 8, 10],
        ],
      },
      {
        label: 'desktop',
        width: screen.desktop.minWidth,
        expectedColumn: 3,
        expectedResults: [
          [1, 4, 7, 10],
          [2, 5, 8],
          [3, 6, 9],
        ],
      },
    ]
    testCases.forEach(testCase => {
      it(`returns ${testCase.expectedColumn} column for ${testCase.label}`, () => {
        act(() => {
          changeInnerWidth(testCase.width)
          window.dispatchEvent(new Event('resize'))
        })
        const { result } = renderHook(() => useColumns({ items: [] }))
        expect(result.current.columnCount).toEqual(testCase.expectedColumn)
      })
      it(`returns the correct result for ${testCase.label}`, () => {
        act(() => {
          changeInnerWidth(testCase.width)
          window.dispatchEvent(new Event('resize'))
        })
        const { result } = renderHook(() => useColumns({ items }))
        expect(result.current.chunkedItems).toEqual(testCase.expectedResults)
      })
    })
  })
  describe('Column count overrides', () => {
    const columnsOverride = {
      desktop: 9,
      tablet: 5,
      phone: 2,
    }
    const testCases = [
      {
        label: 'phone',
        width: screen.phone.maxWidth,
        expectedColumn: columnsOverride.phone,
        expectedResults: [
          [1, 3, 5, 7, 9],
          [2, 4, 6, 8, 10],
        ],
      },
      {
        label: 'tablet',
        width: screen.tablet.minWidth,
        expectedColumn: columnsOverride.tablet,
        expectedResults: [
          [1, 6],
          [2, 7],
          [3, 8],
          [4, 9],
          [5, 10],
        ],
      },
      {
        label: 'desktop',
        width: screen.desktop.minWidth,
        expectedColumn: columnsOverride.desktop,
        expectedResults: [[1, 10], [2], [3], [4], [5], [6], [7], [8], [9]],
      },
    ]
    testCases.forEach(testCase => {
      it(`returns ${testCase.expectedColumn} column for ${testCase.label}`, () => {
        act(() => {
          changeInnerWidth(testCase.width)
          window.dispatchEvent(new Event('resize'))
        })
        const { result } = renderHook(() =>
          useColumns({ items: [], columnOverride: columnsOverride })
        )
        expect(result.current.columnCount).toEqual(testCase.expectedColumn)
      })
      it(`returns the correct result for ${testCase.label}`, () => {
        act(() => {
          changeInnerWidth(testCase.width)
          window.dispatchEvent(new Event('resize'))
        })
        const { result } = renderHook(() =>
          useColumns({ items, columnOverride: columnsOverride })
        )
        expect(result.current.chunkedItems).toEqual(testCase.expectedResults)
      })
    })
  })
})

describe('calculateColumnOriginalIndex', () => {
  const testCases = [
    {
      columnIndex: 0,
      itemIndex: 0,
      columnCount: 3,
      expectedResult: 0,
    },
    {
      columnIndex: 0,
      itemIndex: 1,
      columnCount: 3,
      expectedResult: 3,
    },
    {
      columnIndex: 1,
      itemIndex: 2,
      columnCount: 3,
      expectedResult: 7,
    },
    {
      columnIndex: 1,
      itemIndex: 0,
      columnCount: 3,
      expectedResult: 1,
    },
    {
      columnIndex: 2,
      itemIndex: 0,
      columnCount: 3,
      expectedResult: 2,
    },
    {
      columnIndex: 0,
      itemIndex: 2,
      columnCount: 5,
      expectedResult: 10,
    },
    {
      columnIndex: 1,
      itemIndex: 2,
      columnCount: 5,
      expectedResult: 11,
    },
    {
      columnIndex: 2,
      itemIndex: 2,
      columnCount: 3,
      expectedResult: 8,
    },
  ]
  testCases.forEach(testCase => {
    it(`returns the correct index for [columnIndex: ${testCase.columnIndex} | itemIndex: ${testCase.itemIndex} | columnCount: ${testCase.columnCount}]`, () => {
      expect(
        calculateColumnOriginalIndex(
          testCase.columnIndex,
          testCase.itemIndex,
          testCase.columnCount
        )
      ).toEqual(testCase.expectedResult)
    })
  })
})
