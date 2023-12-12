import { MouseEvent, useState } from 'react'

interface IFilterProps<T extends object> {
  data: T[]
  onChangeData: (value: T[]) => void
  element: string
  styleClass?: string
  keyIndex: number
  dataColumn: string[]
}

export default function Filter<T extends object>({
  data,
  onChangeData,
  element,
  styleClass,
  keyIndex,
  dataColumn,
}: IFilterProps<T>) {
  const [originData] = useState(data)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'none'>('none')
  const [indicator, setIndicator] = useState('')
  const handleSortChange = () => {
    switch (sortOrder) {
      case 'asc':
        return 'desc'

      case 'desc':
        return 'none'

      case 'none':
        return 'asc'

      default:
        return 'none'
    }
  }
  const clickForFilter = (columnName: MouseEvent<HTMLTableCellElement>) => {
    const stateOrder = handleSortChange()
    setSortOrder(stateOrder)
    getSortIndicator(stateOrder)
    const cellElement = columnName.currentTarget.cellIndex
    const indexFilter = dataColumn[cellElement] as keyof T

    let sortedData: T[] = [...data]

    switch (stateOrder) {
      case 'asc':
        sortedData.sort((a, b) => {
          const valueA = a[indexFilter] as string
          const valueB = b[indexFilter] as string
          return valueA.localeCompare(valueB)
        })
        break
      case 'desc':
        sortedData.sort((a, b) => {
          const valueA = a[indexFilter] as string
          const valueB = b[indexFilter] as string
          return valueB.localeCompare(valueA)
        })
        break
      default:
        sortedData = originData
    }

    onChangeData(sortedData)
  }
  const getSortIndicator = (stateOrder: 'asc' | 'desc' | 'none') => {
    switch (stateOrder) {
      case 'asc':
        setIndicator('↑')
        break
      case 'desc':
        setIndicator('↓')
        break
      default:
        setIndicator('')
    }
  }

  return (
    <th
      className={styleClass}
      key={keyIndex}
      onClick={(e) => clickForFilter(e)}
    >
      {element} {indicator}
    </th>
  )
}
