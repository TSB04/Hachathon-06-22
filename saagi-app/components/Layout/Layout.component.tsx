import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import Header from "../Header/Header.component";
import Menu from "../Menu/Menu.component";

const styles = {
	globalContainer: {
		height: "100%",
	},
	main: {
		margin: "1% 0 0 1%",
	},
	container: {
		width: "87%",
		maxHeight: 675,
		overflowX: "auto",
		"&::-webkit-scrollbar": {
			backgroundColor: "red",
			width: "5px"
		},
		"&::-webkit-scrollbar-thumb": {
			backgroundColor: "blue",
			height: "1px"
		},
		"&::-webkit-scrollbar-track": {
			backgroundColor: "white",
		},
		"&::-webkit-scrollbar-track-piece": {
			backgroundColor: "rose",
		},
		
	}
}

const Layout: FunctionComponent = ({ children }) => {

	const useStyles = styles

	return (
		<>
			<Header/>
			<Grid container sx={useStyles.globalContainer}>
				{typeof window !== "undefined" && window.location.pathname !== "/Connexion" && (
					<Menu />
				)}
				<Grid component="main" sx={useStyles.container} >
					<section style={useStyles.main} >
						{ children }
					</section>
				</Grid>
			</Grid>
		</>
	)

}

export default Layout
