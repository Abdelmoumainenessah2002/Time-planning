import React from 'react';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

const AuthProviderWithRouter = ({ children }) => {
    return (
        <Router>
            <AuthProvider>
                {children}
            </AuthProvider>
        </Router>
    );
};

export default AuthProviderWithRouter;
