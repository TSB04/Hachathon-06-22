import { AppBar, Grid, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from 'next/image';
import saagi_logo from '../../public/saagi.png'
import Theme from "../../theme/Theme";


const styles = {
	background: Theme.palette.primary.main,
	padding: "0 1% 0 1%",
}

const Header: FunctionComponent = () => {

	const useStyles = styles

	return (
		<AppBar position="static" sx={useStyles}>
			<Grid container justifyContent="space-between" alignItems="center">
				<Grid item alignContent="center">
					<Image src={saagi_logo} width="150px" height="50px" />
				</Grid>
				<Grid container item alignItems="center" width="max-content">
					<Grid item>
						<Typography>
							user
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			
		</AppBar>
	)

}

export default Header
