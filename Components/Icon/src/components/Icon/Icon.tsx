import React, { JSX } from "react";

import { Icons } from "./Icons";

type IconProps = {
	name: Icons;
	className?: string;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Icon(props: IconProps): JSX.Element {

	const {
		name,
		className = '',
		onClick = undefined
	} = props;

	return (
		<i className={ name + (className ? ' ' + className : '') } onClick={ onClick }></i>
	);
}
