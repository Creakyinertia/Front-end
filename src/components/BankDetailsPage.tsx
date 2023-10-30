import React from 'react'
import bankdetails from '../bankdetails.json';
import { DataTable } from '@carbon/react';
import { unstable_Pagination } from '@carbon/react';

const {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
  } = DataTable;

const BankDetailsPage = () => {
    interface User {
        id: number;
        account_type: string;
        balance: number;
      }
        const headers = ['id', 'account_type', 'Balance'];
        return <Table size="lg" useZebraStyles={false} aria-label="sample table">
            <TableHead>
              <TableRow>
                {headers.map(header => <TableHeader id={header} key={header}>
                    {header}
                  </TableHeader>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {bankdetails.map((row:User) => <TableRow key={row.id}>
            {headers.map((header) => (
              <TableCell key={header}>
                {row[header.toLowerCase() as keyof typeof row]} 
              </TableCell>
            ))}
          </TableRow>)}
            </TableBody>
          </Table>;
    }

export default BankDetailsPage
