import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "../../styles/globals.css";

import React from "react";
import { Providers } from "./providers";
import Nav from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: 'Smart wallet',
	description: 'Powered by Base Smart Wallet Integration',
  }
  
export default function RootLayout(props: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<Nav/>
					{props.children}
					</Providers>
			</body>
		</html>
	);
}
