import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
	root: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		height: '72px',
		position: 'fixed',
		backgroundColor: '#f6f6f6',
		paddingLeft: '24px',
		paddingRight: '24px',
	},
}, {
	name: 'header'
})