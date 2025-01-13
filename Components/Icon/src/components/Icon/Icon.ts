import type { Icons } from "./Icons";

export class Icon {

	public static get(name: Icons, properties: { className?: string } = {}): HTMLElement {
		const element = document.createElement("i");

		element.className = name;
		if (properties.className) {
			element.className += " " + properties.className;
		}

		return element;
	}

}