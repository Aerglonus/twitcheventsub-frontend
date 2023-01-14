import "../styles/globals.css";
import type { AppProps } from "next/app";
// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react";

const theme = createTheme({
	type: "dark",
	theme: {
		colors: {}, // override dark theme colors
	},
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		// 2. Use at the root of your app
		<NextUIProvider theme={theme}>
			<Component {...pageProps} />
		</NextUIProvider>
	);
}
