
import { AppBar, Grid, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Image from 'next/image';
// import estiam_logo from "../../public/estiam_logo.svg"
import { MeetingRoom } from "@mui/icons-material";

const styles = {
	background: "#587193",
	padding: "0 1% 0 1%",
}

const Header: FunctionComponent = () => {

	const useStyles = styles

	return (
		<AppBar position="static" sx={useStyles}>
			<Grid container justifyContent="space-between" alignItems="center">
				<Grid item alignContent="center">
					{/* <Image src={estiam_logo} width="230px" height="40px" /> */} test
				</Grid>
				<Grid container item alignItems="center" width="max-content">
					<Grid item>
						<Typography>
							test@mail.com
						</Typography>
					</Grid>
					<Grid item>
						<MeetingRoom fontSize="medium" />
					</Grid>
				</Grid>
			</Grid>
			
		</AppBar>
	)

}

export default Header
