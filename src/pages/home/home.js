import React, { useState } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Home() {
    const [textFieldValue, setTextFieldValue] = useState('');

    const handleTextFieldChange = (event) => {
        setTextFieldValue(event.target.value);
      };
    
    const handleSubmit = async () => {
    try {
        const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
        {
            data: { 
                name: textFieldValue 
            }
        }
        ),});
        
        if (!response.ok) {
        throw new Error('Failed to submit data');
        }

        // Se a solicitação for bem-sucedida, você pode fazer algo aqui, como exibir uma mensagem de sucesso
        console.log('Data submitted successfully!');
    } catch (error) {
        console.error('Error submitting data:', error);
    }
    };

  return (
      <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            
        }}
        noValidate
        autoComplete="off"
        >
        <TextField 
        id="outlined-basic" 
        label="Cliente" variant="outlined" 
        value={textFieldValue} 
        onChange={handleTextFieldChange} 
        />
        <Button variant="contained" onClick={handleSubmit}>Cadastrar</Button>
       </Box>
  );
}

export default Home;
