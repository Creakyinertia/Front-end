import React from 'react'
import userdetails from '../userdetails.json';
import { DataTable } from '@carbon/react';
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
    const headers = ['id', 'first_name', 'last_name', 'Email', 'Gender'];
    return <Table size="lg" useZebraStyles={false} aria-label="sample table">
        <TableHead>
          <TableRow>
            {headers.map(header => <TableHeader id={header} key={header}>
                {header}
              </TableHeader>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {userdetails.map((row:User) => <TableRow key={row.id}>
            {headers.map((header) => (
              <TableCell key={header}>
                {row[header.toLowerCase() as keyof typeof row]} 
              </TableCell>
            ))}
          </TableRow>)}
        </TableBody>
      </Table>;
}

export default UserDetailsPage