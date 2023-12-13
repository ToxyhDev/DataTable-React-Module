import { SetStateAction, useEffect, useState } from 'react'
import Entries from './Entries'
import EntriesFooter from './EntriesFooter'
import Sort from './Sort'
import SearchBar from './SearchBar'

interface IDataTableProps<T extends object> {
  data: T[]
  title?: string
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
  sort?: boolean
  searchBar?: boolean
}

export function DataTable<T extends object>({
  data,
  title,
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
  sort,
  searchBar,
}: Readonly<IDataTableProps<T>>) {
  const [nbrEntries, setNbrEntries] = useState<string>(`${data.length}`)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [newData, setNewData] = useState(data)
  const [newFilterData, setNewFilterData] = useState(data)

  const [visibleData, setVisibleData] = useState(data)

  useEffect(() => {
    // -> Filter data with number entries
    const startIndex = (currentPage - 1) * Number(nbrEntries)
    const endIndex = startIndex + Number(nbrEntries)

    const tableData = newData.slice(startIndex, endIndex)
    setVisibleData(tableData)
  }, [currentPage, data, nbrEntries, newData])

  const handleEntriesChange = (newEntries: SetStateAction<string>) => {
    setNbrEntries(newEntries)
    setCurrentPage(1)
  }

  const handleChangePage = (newPage: SetStateAction<number>) => {
    setCurrentPage(newPage)
  }

  const handleFilterData = (value: SetStateAction<T[]>) => {
    setNewData(value)
  }

  const handleSearchData = (value: SetStateAction<T[]>) => {
    setNewData(value)
    setNewFilterData(value)
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
      {title ? <h2>{title}</h2> : null}
      <div className={styleToolsBar}>
        {entries ? (
          <Entries
            onEntriesChange={handleEntriesChange}
            styleEntries={styleEntries}
          />
        ) : (
          ''
        )}
        {searchBar ? (
          <SearchBar<T> data={data} onChangeData={handleSearchData} />
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
                {columnTitle.map((column, index) => {
                  if (sort === true) {
                    return (
                      <Sort<T>
                        key={index}
                        data={newData}
                        originData={newFilterData}
                        onChangeData={handleFilterData}
                        element={column}
                        styleClass={styleThead}
                        keyIndex={index}
                        dataColumn={columns}
                      />
                    )
                  } else {
                    return (
                      <th className={styleThead} key={index}>
                        {column}
                      </th>
                    )
                  }
                })}
              </tr>
            </thead>
          )}

          <tbody>
            {visibleData.map((rowData, rowIndex) => (
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
          total={newData.length}
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
