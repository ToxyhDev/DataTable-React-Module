interface IDataTableProps<T extends object> {
  data: T[]
  columnOrder?: string[]
  columnTitle?: string[]
  styleTable?: string
  styleThead?: string
  styleTbody?: string
  styleTr?: string
  styleTableContainer?: string
}

export function DataTable<T extends object>({
  data,
  columnOrder,
  columnTitle,
  styleTable,
  styleThead,
  styleTbody,
  styleTr,
  styleTableContainer,
}: Readonly<IDataTableProps<T>>) {
  console.log(data)
  console.log(styleTable)

  if (!data || data.length === 0 || data === undefined) {
    return <p>Aucune donnée à afficher.</p>
  }

  // Récupère les noms de colonnes à partir de la première entrée du tableau
  let columns = Object.keys(data[0])
  if (columnOrder !== undefined) {
    columns = columnOrder
  }

  console.log(columns)

  return (
    <div className={styleTableContainer}>
      <table className={styleTable}>
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
          {data.map((rowData, rowIndex) => (
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
  )
}
