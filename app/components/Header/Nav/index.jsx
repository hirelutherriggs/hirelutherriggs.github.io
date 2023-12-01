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
					<Image alt='LCR logo' src={logoLCR} />
				</div>
				<ul className={styles.linkList}>
					<li>
						<Link href='/#bio'>Bio</Link>
					</li>
					<li>
						<Link href='/#download-resume'>Resume</Link>
					</li>
					<li>
						<Link href='/#contact-form'>Contact</Link>
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
