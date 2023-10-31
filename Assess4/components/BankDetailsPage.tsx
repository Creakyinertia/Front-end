import React from 'react'
import bankdetails from '../components/bankdetails.json';
import { DataTable,Search } from '@carbon/react';
import { unstable_Pagination as Pagination } from '@carbon/react';

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
        const rows=bankdetails
        return(
             <>
             <Search size="lg" placeholder="Find your items" labelText="Search" closeButtonLabelText="Clear search input" id="search-1" />
             <DataTable rows={rows} headers={headers} isSortable>
             <Table size="lg" useZebraStyles={false} aria-label="sample table">
            <TableHead>
                <TableRow>
                    {headers.map(header => <TableHeader id={header} key={header}>
                        {header}
                    </TableHeader>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row: User) =>                 
                <TableRow key={row.id}>
            {Object.keys(row).filter(key => key !== 'id').map(key => {
          return <TableCell key={key}>{row[key.toLowerCase() as keyof typeof row] }</TableCell>;
        })}
          </TableRow>)}

          </TableBody>
        </Table>
        </DataTable>
        {/* <Pagination pageSizes={[{
      text: 'Ten',
      value: 10
    }, {
      text: 'Twenty',
      value: 20
    }, {
      text: 'Thirty',
      value: 30
    }, {
      text: 'Forty',
      value: 40
    }, {
      text: 'Fifty',
      value: 50
    }]} /> */}
        </>
        )
    }

export default BankDetailsPage