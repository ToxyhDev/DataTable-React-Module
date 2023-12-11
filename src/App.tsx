import { DataTable } from '../index'
import { mockData } from './mocks/mockData'
import styles from './index.module.scss'

interface IEmployee {
  firstName?: string
  lastName?: string
  dateOfBirth?: string
  street?: string
  city?: string
  state?: string
  zipCode?: string
  startDate?: string
  department?: string
}

function App() {
  console.log(mockData)

  const customColumnOrder = [
    'firstName',
    'lastName',
    'startDate',
    'department',
    'dateOfBirth',
    'street',
    'city',
    'state',
    'zipCode',
  ]
  const customColumnTitle = [
    'First Name',
    'Last Name',
    'Start Date',
    'Department',
    'Date of Birth',
    'Street',
    'City',
    'State',
    'Zip Code',
  ]
  return (
    <DataTable<IEmployee>
      data={mockData.data}
      columnOrder={customColumnOrder}
      columnTitle={customColumnTitle}
      styleTable={styles.table}
      styleThead={styles.th}
      styleTbody={styles.td}
    ></DataTable>
  )
}

export default App
