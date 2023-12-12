import { ChangeEvent } from 'react'

interface IEntriesProps {
  onEntriesChange: (value: string) => void
  styleEntries?: string
}

export default function Entries({
  onEntriesChange,
  styleEntries,
}: Readonly<IEntriesProps>) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onEntriesChange(e.target.value)
  }
  return (
    <label id="table-entries" className={styleEntries}>
      Show{' '}
      <select
        name="table-entries"
        aria-controls="main-table"
        onChange={handleChange}
      >
        <option value={2}>2</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>{' '}
      entries
    </label>
  )
}
