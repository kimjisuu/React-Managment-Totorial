import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

})

const customer = [{
  'id' : 1,
  'image' : ''
  'name' : 'testtest',
  'birthday' : '20190121',
  'gender' : 'man'
},
{
  'id' : 2,
  'image' : ''
  'name' : 'testtest',
  'birthday' : '20190121',
  'gender' : 'man'  
}]

class App extends Component {
  render(){
    return (
      <Paper className=''>
        <table className=''>
          <TableHead>

          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </table>
      </Paper>
      <Customer
        id={customer.id}
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
      />
    );
  }  
}

export default App;
