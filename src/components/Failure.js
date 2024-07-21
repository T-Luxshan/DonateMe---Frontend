import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import imgFail from "../assets/fail.png";

function Failure() {
    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate("/");
    };

    return (
        <Container maxWidth="sm" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box textAlign="center">
                <Box>
                  <img src={imgFail} alt="Charity" style={{ width: '250%', maxWidth: '350px', marginBottom: '16px' }} />
                </Box>
                <Typography variant="h4" color="red">Transaction failed!!</Typography>
               
                <Button 
                  variant="text" 
                  color="error" 
                  onClick={onButtonClick} 
                  sx={{ 
                    marginTop: '5px', 
                    textDecoration: 'underline'
                  }}
                >
                  Go Home
                </Button>
            </Box>
        </Container>
    );
}

export default Failure;
