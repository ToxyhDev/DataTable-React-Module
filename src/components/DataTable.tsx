interface IDataTableProps<T extends object> {
  data: T[]
  columnOrder?: string[]
  columnTitle?: string[]
  styleTable?: string
  styleThead?: string
  styleTbody?: string
}

export function DataTable<T extends object>({
  data,
  columnOrder,
  columnTitle,
  styleTable,
  styleThead,
  styleTbody,
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
    <table className={styleTable}>
      {columnTitle === undefined ? (
        ''
      ) : (
        <thead>
          <tr className={styleThead}>
            {columnTitle.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
      )}

      <tbody>
        {data.map((rowData, rowIndex) => (
          <tr key={rowIndex} className={styleTbody}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{String(rowData[column as keyof T])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
