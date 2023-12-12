# DataTable - In development

[![npm version]()]()
[![npm downloads]()]()
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)

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
  filter={true}
></DataTable>
```

## Installation

### NPM

Installing with NPM is the recommended method for rapid integration and an optimal development experience.

```bash
npm install datatable-react-module
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2023-2024. Tox
