import { ChangeEvent } from 'react'

interface ISearchBarProps<T extends object> {
  data: T[]
  onChangeData: (value: T[]) => void
}

export default function SearchBar<T extends object>({
  data,
  onChangeData,
}: Readonly<ISearchBarProps<T>>) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value
    const searchResult = data.filter((element: T) =>
      Object.values(element).some(
        (value) =>
          typeof value === 'string' &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    onChangeData(searchResult)
  }

  return (
    <label>
      Search:{' '}
      <input
        type="search"
        aria-controls="main-table"
        onChange={(e) => handleChange(e)}
        placeholder="Enter search term"
      />
    </label>
  )
}
