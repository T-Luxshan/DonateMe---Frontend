import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import imgCharity from "../assets/Charity.gif";

function Success() {
    // const queryParams = new URLSearchParams(window.location.search);
    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate("/");
    };

    return (
        <Container maxWidth="sm" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box textAlign="center">
                <Box>
                  <img src={imgCharity} alt="Charity" style={{ width: '200%', maxWidth: '300px', marginBottom: '16px' }} />
                </Box>
                <Typography variant="h4" color="green">Donation made Successfully!</Typography>
                {/* <Typography variant="body1" color="textPrimary" style={{ whiteSpace: 'pre-wrap', marginTop: '16px' }}>
                    {queryParams.toString().split("&").join("\n")}
                </Typography> */}
                <Button 
                  variant="text" 
                  color="success" 
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

export default Success;
