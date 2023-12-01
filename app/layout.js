import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Luther Riggs: FE Web Engineer",
	description: "Luther Riggs is a front end web engineer based in New York City. ",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
