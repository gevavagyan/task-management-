import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	input: {
		border: '1px solid #afafaf',
		borderRadius: 6,
		padding: '4px 12px',
		height: 34,
		marginTop: 8,
		marginBottom: 24,
	}
}, {
	name: 'button'
})