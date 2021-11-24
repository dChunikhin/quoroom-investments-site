import "styles/reset.scss";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { GlobalAppRouter } from 'routes'

import {
    createTheme,
    ThemeProvider,
    StyledEngineProvider,
} from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(247, 172, 114, 1)',
        },
    },
    mixins: {
        link: {
            textDecoration: 'none',
            color: 'inherit'
        }
    },
    overrides: {

    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                fullWidth: true,
                disableRipple: true,
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: "0",
                    "&:hover": {
                        backgroundColor: "transparent"
                    },
                }
            }
        },
    },
    shape: {},
    props: {},
    variables: {
        borderRadius: {
            min: '12px',
        },
    },
    typography: {
        h1: {
            fontSize: '64px',
            fontWeight: '500',
        },
        h2: {
            fontSize: '36px',
            fontWeight: '600',
        },
        h3: {
            fontSize: '24px',
            fontWeight: '600',
        },
        h4: {
            fontSize: '18px',
            fontWeight: '700',
        },
        h5: {
            fontSize: '16px',
            fontWeight: '700',
        },
        h6: {
            fontSize: '16px',
            fontWeight: '700',
        },
        subtitle1: {
            fontSize: '18px',
            fontWeight: '300',
        },
        subtitle2: {
            fontSize: '16px',
        },
        body1: {
            fontSize: '16px',
            fontWeight: '500',
        },
        body2: {
            fontSize: '14px',
        },
        fontFamily: 'Roboto',
        button: {
            textTransform: 'none',
        },
    },
})

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    {renderRoutes(GlobalAppRouter.routes)}
                </ThemeProvider>
            </StyledEngineProvider>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);
