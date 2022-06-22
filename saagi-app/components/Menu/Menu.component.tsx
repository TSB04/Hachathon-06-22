import { FunctionComponent, useState } from "react"
import { List, ListItem, ListItemText, ListItemButton, Typography } from "@mui/material"
import Link from "next/link"
import Theme from "../../theme/Theme"

const styleProps = {
	width: "10%",
	minWidth: 120,
	height: 675,
	backgroundColor: Theme.palette.secondary.dark,
	list: {
		marginTop: -1,
	},
	selected: {
		"&.Mui-selected, &:hover": {
			backgroundColor: Theme.palette.secondary.main
		},
	}
}


const Menu: FunctionComponent = () => {

	const [selected, setSelected] = useState<number>(0)

	const menuStyles = styleProps

	return (
		<aside style={menuStyles}>
			<List sx={menuStyles.list}>
				<ListItem disableGutters disablePadding>
					<ListItemButton selected={selected === 0} onClick={_ => setSelected(0)} sx={menuStyles.selected}>
						<Link href="/Projects">
							<ListItemText>
								<Typography>Mes Projets</Typography>
							</ListItemText>
						</Link>
					</ListItemButton>
				</ListItem>
				<ListItem disableGutters disablePadding>
					<ListItemButton selected={selected === 1} onClick={_ => setSelected(1)} sx={menuStyles.selected}>
						<Link href="/Options">
							<ListItemText>
								<Typography>Options</Typography>
							</ListItemText>
						</Link>
					</ListItemButton>
				</ListItem>
				
			</List>
		</aside>
	)
}

export default Menu
