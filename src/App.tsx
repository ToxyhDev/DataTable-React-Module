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
      title="Current Employees"
      columnOrder={customColumnOrder}
      columnTitle={customColumnTitle}
      styleDataTable={styles.datatable}
      styleToolsBar={styles.toolsbar}
      styleTableContainer={styles.tableContainer}
      styleTable={styles.table}
      styleThead={styles.th}
      styleTbody={styles.td}
      styleTr={styles.tr}
      entries={true}
      styleEntries={styles.entries}
      styleEntriesFooter={styles.entriesFooter}
      stylePrevNext={styles.btnPrevNext}
      stylePage={styles.btnPage}
      sort={true}
      searchBar={true}
    ></DataTable>
  )
}

export default App
