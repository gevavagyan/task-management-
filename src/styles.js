import { createUseStyles } from 'react-jss';


export const useStyles = createUseStyles({
	root: {
		paddingTop: '72px',
		// marginRight: '24px',
		// marginLeft: '24px',
	},
	tasksContainer: {
		margin: '0 auto',
		paddingTop: '24px',
		display: 'flex',
		gap: '8px',
		justifyContent: 'space-between',

		'@media all and (max-width: 768px)': {
			flexDirection: 'column',
		},
	},
	taskColumn: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1',
		backgroundColor: '#f6f6f6',
		borderRadius: '8px',
		padding: '8px',
	}
},{ name: 'main' })