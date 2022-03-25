import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
	root: {
		position: 'absolute',
		top: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height:' 100vh',
		backgroundColor: 'rgb(0 0 0 / 80%)',
		zIndex: 100,
	},
	body: {
		position: 'relative',
		display: 'flex',
		alignItems: 'stretch',
		justifyContent: 'space-between',
		flexDirection: 'column',
		width: '90%',
		maxWidth: 600,
		height: '90%',
		maxHeight: 600,
		backgroundColor: '#fff',
		borderRadius: 8,
		padding: 16,
	},
	buttonWrapper: {
		marginTop: 'auto',
		display: 'flex',
		justifyContent: 'flex-end',
		paddingBottom: 16
	},
	priorityChooser: {
		marginBottom: 24,

		'& label': {
			marginBottom: 8,
			display: 'flex',
			alignItems: 'center',
			cursor: 'pointer',
		},

		'& h4': {
			margin: '0 0 0 12px',
		},
	},
	rowWrapper: {
		display: 'flex',
		justifyContent: 'space-around'
	},
	closeWrapper: {
		position: 'absolute',
		right: 8,
		top: 8,
		cursor: 'pointer',
	}
}, {
	name: 'modal'
})