# DataTable - React

![DataTable](https://img.shields.io/badge/datatable-%2314248A.svg?style=for-the-badge&&logoColor=%23FFFFFF)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![mit](https://img.shields.io/badge/license-mit-%2360935D.svg?style=for-the-badge&&logoColor=%23FFFFFF)

## Introduction

**Datatable** is a library built with **React**, which allows you to easily create tables to use data.
This library uses **CSS Modules** or **SASS modules** to add style.

The objective of this library is to simplify table creation for you. A task that can quickly become complicated when you want to integrate data dynamically.

1. **Create** tables easily and quickly.
1. **Display** data dynamically.
1. **Quickly** integrate additional components such as a search bar or a sorting system.

Documentation at

## Exmaples:

```jsx
import styles from './index.module.scss'

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
```

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Documentation](#documentation)
- [License](#license)

## Prerequisites

1. [NodeJS (version 20.9.0)](https://nodejs.org/en/)
1. [NPM](https://www.npmjs.com/)
1. [React.js](https://react.dev/)

## Installation

### NPM

Installing with NPM is the recommended method for rapid integration and an optimal development experience.

```bash
npm install datatable-react-module
```

### Module

To start using this library, simply:

1. Import library:

```tsx
import { DataTable } from 'datatable-react-module'
```

2. Use the component:

> [!IMPORTANT]  
> Just props data is required, it's a array with objects

```tsx
<DataTable<IEmployee> data={dataEmployees.data}></DataTable>
```

> [!NOTE]  
> Example of an object included in the table.

```ts
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
```

## Documentation

## Order Data

- It is possible to personalize the order of the columns according to the objects that are transmitted and also to personalize the name of the columns:

```ts
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
```

```tsx
<DataTable columnOrder={customColumnOrder} columnTitle={customColumnTitle} />
```

## Other features

- It is possible to add additional functionality with props

### Title

Table title.

```tsx
<DataTable title="Title" />
```

### Entries

To control the number of lines displayed in the table.

```tsx
<DataTable entries={true} />
```

### SearchBar

Allows you to search in the table.

```tsx
<DataTable searchBar={true} />
```

### Sort

To sort a column alphabetically or vice versa.

```tsx
<DataTable sort={true} />
```

### Add style

- You must import your CSS or SASS module.
  It is also possible to insert the name of your class but it is advisable to use the first method, this will be the one used.

```tsx
import styles from './index.module.scss'
```

```tsx
<DataTable
  styleDataTable={styles.datatable}
  styleToolsBar={styles.toolsbar}
  styleTableContainer={styles.tableContainer}
  styleTable={styles.table}
  styleThead={styles.th}
  styleTbody={styles.td}
  styleTr={styles.tr}
  styleEntries={styles.entries}
  styleEntriesFooter={styles.entriesFooter}
  stylePrevNext={styles.btnPrevNext}
  stylePage={styles.btnPage}
/>
```

This is now how the transmitted classes are used:

```tsx
    <div className={styleDataTable}>
      <h2>{title}</h2>

      <div className={styleToolsBar}>
        <label id="table-entries" className={styleEntries}></label>
        <label>
          <input type="search"/>
        </label>
      </div>

      <div className={styleTableContainer}>
        <table className={styleTable} id="main-table">

          <thead>
            <tr className={styleTr}>
              <th className={styleThead}></th>
            </tr>
          </thead>

          <tbody>
            <tr className={styleTr}>
              <td className={styleTbody}></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styleEntriesFooter}>
        <p><p>
        <div>
          <button className={stylePrevNext}>
            Previous
          </button>
          <button className={stylePage}>
            {page}
          </button>
          <button className={stylePrevNext}>
            Next
          </button>
        </div>
      </div>
    </div>
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2023-2024. Tox
