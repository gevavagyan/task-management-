import { createUseStyles } from 'react-jss';


export const useStyles = createUseStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#efefef',
		margin: '4px',
		padding: '8px',
		border: '1px dashed #cfcfcf',
		borderRadius: '8px',
		position: 'relative',

		'&:hover': {
			boxShadow: '2px 3px 8px -3px #afafaf',
		},
	},
	iconWrapper: {
		position: 'absolute',
		right: '8px',
		top: '4px',
		cursor: 'pointer',
	}
},{ name: 'task' })