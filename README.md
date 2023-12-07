# DataTable ⚠️ In development ⚠️

[![npm version](https://badge.fury.io/js/recharts.svg)](http://badge.fury.io/js/datatable-react-module)
[![npm downloads](https://img.shields.io/npm/dm/recharts.svg?style=flat-square)](https://www.npmjs.com/package/datatable-react-module)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)

## Introduction

**Datatable** is a library built with **React**, which allows you to easily create tables to use data.

The objective of this library is to simplify table creation for you. A task that can quickly become complicated when you want to integrate data dynamically.

1. **Create** tables easily and quickly.
1. **Display** data dynamically.
1. **Quickly** integrate additional components such as a search bar or a sorting system.

Documentation at

## Exmaples:

```jsx
<DataTable data={myData} title="Current Employees">
  <Entries />
  <SearchBar />

  <Column order={1} title="First Name" dataId={firstName} filter={true}>
  <Column order={2} title="Last Name" dataId={lastName} filter={true}>
</DataTable>
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
