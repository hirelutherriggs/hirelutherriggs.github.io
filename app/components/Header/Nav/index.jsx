import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import logoLCR from "@/public/logo-lcr.png";

const Nav = () => {
	return (
		<nav className={styles.Nav}>
			<div className={styles.NavContainer}>
				<div className={styles.logo}>
					<Link href='/'>
						<Image alt='LCR logo' src={logoLCR} />
					</Link>
				</div>
				<ul className={styles.linkList}>
					<li>
						<Link href='/about'>About</Link>
					</li>
					<li>
						<Link href='/portfolio'>Portfolio</Link>
					</li>
				</ul>
			</div>
			{/* <div className="NavSecondary">
				<ul>
					<li>Nav Secondary 1</li>
				</ul>
			</div> */}
		</nav>
	);
};

export default Nav;
