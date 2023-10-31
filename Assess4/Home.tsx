import { Button, ClickableTile } from '@carbon/react';
import { Grid,Column } from '@carbon/react';
import React from 'react';
import './app.scss'
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate=useNavigate()
  
  return (
    <>
    <Button className='buthome' onClick={()=>navigate('./LoginPage')}>Logout</Button>
      <Grid>
      <Column sm="25%" md="50%" lg="25%">
      <ClickableTile id='c1' href='http://localhost:3000/UserDetailsPage'>User_Details</ClickableTile>
      </Column>
      <Column  sm="25%" md="50%" lg="25%">
      <ClickableTile id='c2' href='http://localhost:3000/BankDetailsPage'>Bank_Details</ClickableTile>
      </Column>
      <Column  sm="25%" md="50%" lg="25%">
      <ClickableTile id='c3' href='http://localhost:3000/AddNewUser'>Add_New_User</ClickableTile>
      </Column> 
      </Grid>
      
    </>
  );
};
export default Home;
// yarn add <YOUR_PACKAGE> --network-timeout 300000