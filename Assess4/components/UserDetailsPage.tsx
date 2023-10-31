import React from 'react'
import userdetails from '../components/userdetails.json';
import { DataTable,Search } from '@carbon/react';


const {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
  } = DataTable;

const UserDetailsPage=()=>{ 
  interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    password: string;
  }
  
    const headers = ['Id', 'first_name', 'last_name', 'Email', 'Gender'];
    const headers1 = ['Id', 'First name', 'Last name', 'Email', 'Gender'];
    return (
    <>
    <Search size="lg" placeholder="Find your items" labelText="Search" closeButtonLabelText="Clear search input" id="search-1" />
    <Table size="lg" useZebraStyles aria-label="sample table">
        <TableHead>
          <TableRow>
            {headers1.map(header => <TableHeader id={header} key={header}>
                {header}
              </TableHeader>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {userdetails.map((row:User) => 
          <TableRow key={row.id}>
            {headers.map((header) => (
              <TableCell key={header}>
                {row[header.toLowerCase() as keyof typeof row]} 
              </TableCell>
            ))}
          </TableRow>)}
        </TableBody>
      </Table>
      </>
      )
}

export default UserDetailsPage