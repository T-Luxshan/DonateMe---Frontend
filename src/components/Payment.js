import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { initiatePayment } from '../service/PaymentService';
const Payment = () => {

    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handlePayment = () => {
        initiatePayment(name, email, amount)
          .then(res=>{
              console.log("Payment sucess")
              window.location.href = res.data;
          })
          .catch(err=>console.log("Payment failed"));

    }    
  return (
      <Box>
          <TextField
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            onChange={(e) => setAmount(e.target.value)}
            />
            <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            />
            <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            />
          <Button variant="contained" onClick={handlePayment}>Donate</Button>

      </Box>
  )
}

export default Payment
