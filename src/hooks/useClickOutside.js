import {useEffect} from 'react';

export function useClickOutside(ref, closeCallback) {

	const handleClick = (e) => {
		if(!ref.current.contains(e.target)) {
			closeCallback(false);
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		}

	}, [ref])
}