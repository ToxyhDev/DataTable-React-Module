import { useEffect, useState } from 'react'

interface IEntriesFooter {
  entries: string
  page: number
  total: number
  onChangePage: (value: number) => void
  styleEntriesFooter?: string
  stylePrevNext?: string
  stylePage?: string
}

export default function EntriesFooter({
  entries,
  page,
  total,
  onChangePage,
  styleEntriesFooter,
  stylePrevNext,
  stylePage,
}: Readonly<IEntriesFooter>) {
  //States
  const [startEntries, setStartEntries] = useState<number>()
  const [endEntries, setEndEntries] = useState<number>()
  const [totalEntries, setTotalEntries] = useState<number>()
  const [currentPage, setCurrentPage] = useState<number>()
  const [totalPages, setTotalPages] = useState<number>()

  useEffect(() => {
    // -> Filter data with number entries
    const startIndex = (page - 1) * Number(entries)
    const endIndex = startIndex + Number(entries)
    const totalPage =
      Number(entries) !== 0 ? Math.ceil(total / Number(entries)) : 0
    console.log(totalPage)
    setStartEntries(startIndex + 1)
    setEndEntries(endIndex)
    setTotalEntries(total)
    setCurrentPage(page)
    setTotalPages(totalPage)
  }, [page, entries, total])

  const changePage = (value: number) => {
    // const totalPage = Math.ceil(total / Number(entries))
    const calcPage = page + value
    let newPage
    if (totalPages !== undefined) {
      if (calcPage <= 0) {
        newPage = 1
      } else if (calcPage >= totalPages) {
        newPage = totalPages
      } else {
        newPage = calcPage
      }

      onChangePage(newPage)
    } else {
      return console.log('totalPages est undefined')
    }
  }

  return (
    <div className={styleEntriesFooter}>
      <p>{`Showing ${startEntries} to ${endEntries} of ${totalEntries} entries`}</p>
      <div>
        {currentPage === 1 ? (
          <p className={stylePrevNext}>Previous</p>
        ) : (
          <button className={stylePrevNext} onClick={() => changePage(-1)}>
            Previous
          </button>
        )}
        {totalPages === undefined || currentPage === undefined
          ? ''
          : Array(totalPages)
              .fill(null)
              .map((_, index) => {
                const page = index + 1
                if (page === currentPage) {
                  return (
                    <button
                      key={index}
                      className={stylePage}
                      style={{ backgroundColor: '#dfdfdf' }}
                      onClick={() => onChangePage(page)}
                    >
                      {page}
                    </button>
                  )
                } else if (page > currentPage + 1 || page < currentPage - 1) {
                  return null
                } else {
                  return (
                    <button
                      key={index}
                      className={stylePage}
                      onClick={() => onChangePage(page)}
                    >
                      {page}
                    </button>
                  )
                }
              })}
        {/* <button className={stylePage}>{currentPage}</button> */}
        {currentPage === totalPages ? (
          <p className={stylePrevNext}>Next</p>
        ) : (
          <button className={stylePrevNext} onClick={() => changePage(+1)}>
            Next
          </button>
        )}
      </div>
    </div>
  )
}
