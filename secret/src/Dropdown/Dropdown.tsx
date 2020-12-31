import React, {ReactNode, useEffect, useRef, useState} from 'react';
import './Dropdown.css';

interface DropdownProps {
	target: ReactNode;
	children: ReactNode;
}

export function Dropdown({target, children}: DropdownProps) {
	const [dropdownDisplay, setDropdownDisplay] = useState<boolean>(true);
	const [dropdownPosition, setDropDownPosition] = useState<string>('auto');
	const buttonRef = useRef<HTMLButtonElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const dropdownStyles = {
		display: dropdownDisplay ? `block` : `none`,
		bottom: dropdownPosition,
	}

	useEffect(() => {
		if(buttonRef && buttonRef.current && dropdownRef && dropdownRef.current) {
			const btnData = buttonRef.current.getBoundingClientRect();
			const dropdownData = dropdownRef.current.getBoundingClientRect();
			const totalDropdownHeight = btnData.top + btnData.height + dropdownData.height;
			if (totalDropdownHeight > window.innerHeight) {
				setDropDownPosition(`${btnData.height}px`);
			}
		}
	}, []);

	return (
		<div className='dropdown'>
			<button
				onClick={() => setDropdownDisplay(!dropdownDisplay)}
				ref={buttonRef}
			>
				{target}
			</button>
			<div className='dropdown__content' ref={dropdownRef} style={dropdownStyles}>{children}</div>
		</div>
	);
}
