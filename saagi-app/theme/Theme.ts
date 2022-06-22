import { createTheme,responsiveFontSizes } from "@mui/material/styles"

let Theme = createTheme({
    palette: {
        primary: {
            main: "#253c5b",
        },
        secondary: {
            main: "#E52728",
            dark: "#DE3345"
        },
        error: {
            main: "#FF0033"
        }
    },
    components: {
        MuiListItemText: {
            styleOverrides: {
                root: {
                    color: "white",
                    width: "auto"
                },
            }
        },
        
    }
})

Theme = responsiveFontSizes(Theme);


export default Theme