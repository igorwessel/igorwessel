import { createIsomorphicFn } from "@tanstack/react-start";
import { createContext, useState } from "react";

type GeekModeContextProps = {
	geekMode: boolean;
	updateGeekMode: (geekMode: boolean) => void;
};

export const GeekContext = createContext<GeekModeContextProps | undefined>(
	undefined,
);

const getStoredGeekMode = createIsomorphicFn()
	.server((): boolean => false)
	.client((): boolean => {
		const stored = localStorage.getItem("geek-mode");

		return stored === "true";
	});

export const GeekModeProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [geekMode, setGeekMode] = useState<boolean>(getStoredGeekMode());

	const updateGeekMode = (newGeekMode: boolean) => {
		setGeekMode(newGeekMode);

		localStorage.setItem("geek-mode", newGeekMode.toString());
	};

	return (
		<GeekContext.Provider value={{ geekMode, updateGeekMode }}>
			{children}
		</GeekContext.Provider>
	);
};
