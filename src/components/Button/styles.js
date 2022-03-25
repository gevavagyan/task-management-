import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
	root: {
		border: 0,
		outline: 0,
		padding: '10px 16px',
		borderRadius: '8px',
		color: '#fff',
		backgroundColor: '#3d6cff',
		minWidth: '80px',
		textAlign: 'center',
		cursor: 'pointer',

		'&:hover': {
			backgroundColor: '#3d4dff',
		},

		'& ~ &': {
			marginLeft: '12px',
		},
	},
}, {
	name: 'button'
})