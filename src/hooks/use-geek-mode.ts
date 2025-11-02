import { use } from "react";
import { GeekContext } from "@/components/geek-mode-provider";

export const useGeekMode = () => {
	const context = use(GeekContext);

	if (!context) {
		throw new Error("useGeekMode must be used within a GeekModeProvider");
	}

	return context;
};
