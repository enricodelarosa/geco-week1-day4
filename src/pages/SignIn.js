import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function SignIn() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const validateEmail = (email) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        // Password should have at least 1 capital letter and 1 number
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
        return passwordRegex.test(password);
      };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
      
        if (name === 'email') {
          setEmailError(!validateEmail(value));
        } else if (name === 'password') {
          setPasswordError(!validatePassword(value));
        }
      
        setFormData({
          ...formData,
          [name]: value,
        });
      
        // Enable or disable the submit button based on validation

        if (name == 'email') {
            setIsSubmitDisabled(!validateEmail(value) || !validatePassword(formData.password));
        } else {
            setIsSubmitDisabled(!validateEmail(formData.email) || !validatePassword(value));
        }


      };
      


    const handleSubmit = (e) => {
        e.preventDefault();
        // Check email and password validation
        if (validateEmail(formData.email) && validatePassword(formData.password)) {
            setOpenSnackbar(true);
            setSnackbarMessage('Account successfully created');
            // Reset form fields or clear state as needed
            setFormData({
                email: '',
                password: ''
            })
        }
    };




    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Sign In</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: 500, display: 'flex', margin: '0 auto', flexDirection: 'column', columnGap: 15, rowGap: 15 }}>
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    error={emailError}
                    helperText={emailError ? 'Invalid email' : ''}
                />

                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    error={passwordError}
                    helperText={
                        passwordError
                            ? 'Password must contain at least 1 capital letter and 1 number'
                            : ''
                    }
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitDisabled}
                >
                    Sign Up
                </Button>

            </form>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
            >
                <MuiAlert
                    elevation={6}
                    variant="filled"
                    onClose={() => setOpenSnackbar(false)}
                    severity="success"
                >
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </div>
    );

}