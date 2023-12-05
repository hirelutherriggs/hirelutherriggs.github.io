import Image from "next/image";
import headshot from "@/public/image-headshot-tilted.jpg";
import styles from "./page.module.scss";

export default function Home() {
	return (
		<div id='home-page'>
			<div className='header-offset'></div>
			<main id='main' className={styles.Main}>
				<div className='container'>
					<section className={styles.splash}>
						<div className={styles.flexWrapper}>
							<div className={styles.imageWrapper}>
								<div className={styles.imageSpinner}>
									<Image alt='Headshot of Luther Riggs' src={headshot} placeholder='blur' />
								</div>
							</div>
							<div>
								<h1>Luther Riggs</h1>
								<p>Front end web engineer</p>
							</div>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}
