import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#1e1e1e',
            paper: '#292929',
        },
        text: {
            primary: '#ffffff',
            secondary: '#ff9a8b',
        },
        primary: {
            main: '#ff9a8b',
        },
        secondary: {
            main: '#667eea',
        },
    },
    typography: {
        h1: {
            color: '#ffffff',
        },
        h2: {
            color: '#ffffff',
        },
        h3: {
            color: '#ffffff',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(135deg, #ff9a8b 0%, #ff6a88 100%)',
                    color: '#ffffff',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #ff6a88 0%, #ff9a8b 100%)',
                    },
                    transition: 'background 0.3s ease',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#292929',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    borderRadius: '8px',
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: 'rgba(255, 154, 139, 0.1)',
                    },
                    transition: 'background-color 0.3s ease',
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#2c2c2c',
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    border: '2px solid #ffffff',
                },
            },
        },
    },
});

export default theme;
