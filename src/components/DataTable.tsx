import { SetStateAction, useEffect, useState } from 'react'
import Entries from './Entries'
import EntriesFooter from './EntriesFooter'

interface IDataTableProps<T extends object> {
  data: T[]
  columnOrder?: string[]
  columnTitle?: string[]
  styleDataTable?: string
  styleToolsBar?: string
  styleTable?: string
  styleThead?: string
  styleTbody?: string
  styleTr?: string
  styleTableContainer?: string
  entries?: boolean
  styleEntries?: string
  styleEntriesFooter?: string
  stylePrevNext?: string
  stylePage?: string
}

export function DataTable<T extends object>({
  data,
  columnOrder,
  columnTitle,
  styleDataTable,
  styleToolsBar,
  styleTable,
  styleThead,
  styleTbody,
  styleTr,
  styleTableContainer,
  entries,
  styleEntries,
  styleEntriesFooter,
  stylePrevNext,
  stylePage,
}: Readonly<IDataTableProps<T>>) {
  console.log(data)

  const [nbrEntries, setNbrEntries] = useState<string>(`${data.length}`)

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [newData, setNewData] = useState(data)
  useEffect(() => {
    // -> Filter data with number entries
    const startIndex = (currentPage - 1) * Number(nbrEntries)
    const endIndex = startIndex + Number(nbrEntries)

    const visibleData = data.slice(startIndex, endIndex)
    console.log(nbrEntries)
    console.log(endIndex)
    console.log(visibleData)
    setNewData(visibleData)
  }, [data, currentPage, nbrEntries])

  const handleEntriesChange = (newEntries: SetStateAction<string>) => {
    setNbrEntries(newEntries)
    setCurrentPage(1)
    console.log(nbrEntries)
  }

  const handleChangePage = (newPage: SetStateAction<number>) => {
    console.log(newPage)
    setCurrentPage(newPage)
  }

  if (!data || data.length === 0 || data === undefined) {
    return <p>Aucune donnée à afficher.</p>
  }

  // Take name columns
  let columns = Object.keys(data[0])
  if (columnOrder !== undefined) {
    columns = columnOrder
  }

  return (
    <div className={styleDataTable}>
      <div className={styleToolsBar}>
        {entries ? (
          <Entries
            onEntriesChange={handleEntriesChange}
            styleEntries={styleEntries}
          />
        ) : (
          ''
        )}
      </div>

      <div className={styleTableContainer}>
        <table className={styleTable} id="main-table">
          {columnTitle === undefined ? (
            ''
          ) : (
            <thead>
              <tr className={styleTr}>
                {columnTitle.map((column, index) => (
                  <th className={styleThead} key={index}>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
          )}

          <tbody>
            {newData.map((rowData, rowIndex) => (
              <tr key={rowIndex} className={styleTr}>
                {columns.map((column, colIndex) => (
                  <td className={styleTbody} key={colIndex}>
                    {String(rowData[column as keyof T])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {entries ? (
        <EntriesFooter
          entries={nbrEntries}
          total={data.length}
          page={currentPage}
          onChangePage={handleChangePage}
          styleEntriesFooter={styleEntriesFooter}
          stylePrevNext={stylePrevNext}
          stylePage={stylePage}
        />
      ) : (
        ''
      )}
    </div>
  )
}
