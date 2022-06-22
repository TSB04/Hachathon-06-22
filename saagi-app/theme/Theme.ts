import { createTheme,responsiveFontSizes } from "@mui/material/styles"

let Theme = createTheme({
    palette: {
        primary: {
            main: "#587193",
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
        // MuiInput: {
        //     styleOverrides: {
        //         root: {
        //             "#fileSelect": {
        //                 textDecoration: "none",
        //                 color: "red",
        //                 backgroundColor: "tomato",
        //                 // visibility: "hidden"
        //             },
        //         }
        //     }
        // }
    }
})

Theme = responsiveFontSizes(Theme);


export default Theme