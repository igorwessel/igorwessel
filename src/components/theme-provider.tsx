import { ScriptOnce } from "@tanstack/react-router";
import { createClientOnlyFn, createIsomorphicFn } from "@tanstack/react-start";
import { createContext, type ReactNode, useEffect, useState } from "react";
import { z } from "zod";

const UserThemeSchema = z.enum(["light", "dark", "system"]).catch("system");
const AppThemeSchema = z.enum(["light", "dark"]).catch("light");

export type UserTheme = z.infer<typeof UserThemeSchema>;
export type AppTheme = z.infer<typeof AppThemeSchema>;

const themeStorageKey = "ui-theme";

const getStoredUserTheme = createIsomorphicFn()
	.server((): UserTheme => "system")
	.client((): UserTheme => {
		const stored = localStorage.getItem(themeStorageKey);
		return UserThemeSchema.parse(stored);
	});

const setStoredTheme = createClientOnlyFn((theme: UserTheme) => {
	const validatedTheme = UserThemeSchema.parse(theme);

	localStorage.setItem(themeStorageKey, validatedTheme);
});

const getSystemTheme = createIsomorphicFn()
	.server((): AppTheme => "light")
	.client((): AppTheme => {
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	});

const handleThemeChange = createClientOnlyFn((userTheme: UserTheme) => {
	const validatedTheme = UserThemeSchema.parse(userTheme);

	const root = document.documentElement;
	root.classList.remove("light", "dark", "system");

	if (validatedTheme === "system") {
		const systemTheme = getSystemTheme();
		root.classList.add(systemTheme, "system");
	} else {
		root.classList.add(validatedTheme);
	}
});

const setupPreferredListener = createClientOnlyFn(() => {
	const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
	const handler = () => handleThemeChange("system");
	mediaQuery.addEventListener("change", handler);
	return () => mediaQuery.removeEventListener("change", handler);
});

// biome-ignore-start lint/complexity/useArrowFunction: Inline script
const themeScript = (function () {
	function themeFn() {
		try {
			const storedTheme = localStorage.getItem("ui-theme") || "system";
			const validTheme = ["light", "dark", "system"].includes(storedTheme)
				? storedTheme
				: "system";

			if (validTheme === "system") {
				const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
					.matches
					? "dark"
					: "light";
				document.documentElement.classList.add(systemTheme, "system");
			} else {
				document.documentElement.classList.add(validTheme);
			}
		} catch {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
				.matches
				? "dark"
				: "light";
			document.documentElement.classList.add(systemTheme, "system");
		}
	}
	return `(${themeFn.toString()})();`;
})();
// biome-ignore-end lint/complexity/useArrowFunction: Inline script

type ThemeContextProps = {
	userTheme: UserTheme;
	appTheme: AppTheme;
	setTheme: (theme: UserTheme) => void;
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(
	undefined,
);

type ThemeProviderProps = {
	children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [userTheme, setUserTheme] = useState<UserTheme>(getStoredUserTheme);

	useEffect(() => {
		if (userTheme !== "system") return;

		return setupPreferredListener();
	}, [userTheme]);

	const appTheme = userTheme === "system" ? getSystemTheme() : userTheme;

	const setTheme = (newUserTheme: UserTheme) => {
		const validatedTheme = UserThemeSchema.parse(newUserTheme);
		setUserTheme(validatedTheme);
		setStoredTheme(validatedTheme);
		handleThemeChange(validatedTheme);
	};

	return (
		<ThemeContext value={{ userTheme, appTheme, setTheme }}>
			<ScriptOnce>{`${themeScript}`}</ScriptOnce>

			{children}
		</ThemeContext>
	);
}
