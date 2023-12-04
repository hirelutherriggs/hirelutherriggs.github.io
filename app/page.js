// import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
	return (
		<div id='home-page'>
			<div className={styles.headerOffset}></div>
			<main id='main' className={styles.Main}>
				<div className='container'>
					<section id='splash'>
						<div class='flex-column-start-center flex-lg-row-center-start'>
							<img src='' alt=''></img>
							<h1>Luther Riggs</h1>
							<p>Front end web engineer</p>
						</div>
					</section>

					<section id='bio' className='jump-link-target'>
						{/* <Bio /> */}
						<h2>A little about me...</h2>
						<p>
							I am a Senior Front End Engineer, proficient in composing deeply interactive user
							interfaces and optimizing browser performance for web apps, web sites, and interactive
							marketing materials. I am proficient in modern JavaScript frameworks and libraries
							(React, Vue, Salesforce Lightning), popular CMS platforms (Salesforce, Sitecore,
							WordPress), and API integration (RESTful, GraphQL) - please see my resume for a full
							list of technologies.
						</p>
						<p>
							In my current role with IPG Health, I lead the development of React-based user
							interfaces using frameworks such as Next and Gatsby. I also have experience writing
							API calls to databases and CMSs, as well as third-parties, such as AWS and Salesforce.
						</p>
						<p>
							I am currently pursuing educational paths in the areas of computer science (Open
							Source Society University) and SQL/NoSQL languages (Oracle University and MongoDB
							University).
						</p>
						<p>
							As someone with experience in building UI components with modern frameworks, I feel
							that I am well suited to deliver an amazing user experience through your client
							platform.
						</p>
						<p>
							I look forward to speaking with you at your earliest convenience. To set up an
							interview, please contact me at hire.luther.riggs@gmail.com.
						</p>
						<p>Sincerely,</p>
						<p>Luther Riggs</p>
					</section>

					<section id='resume' className='jump-link-target'>
						<h2>View my resume</h2>
						<p>Resume as text</p>
						<h3>Download my resume</h3>
						{/* <DownloadFile /> */}
					</section>

					<section id='contact' className='jump-link-target'>
						<h2>Contact me</h2>
						{/* <ContactForm builderJSON={{"element": "input", "type": "text", "name":"first-name", "placeholder":""}} /> */}
						<form>
							{/* <Input.Text name="first-name" /> */}
							<div className='fc-input'>
								<label id='first-name'>First name</label>
								<input type='text' name='first-name' />
							</div>
							{/* <Input.Text name="last-name" /> */}
							<div className='fc-input'>
								<label id='last-name'>Last name</label>
								<input type='text' name='last-name' />
							</div>
							{/* <Input.Email name="email" /> */}
							<div className='fc-input'>
								<label id='email'>Email</label>
								<input type='email' name='email' />
							</div>
							{/* <Input.Text name="subject" /> */}
							<div className='fc-input'>
								<label id='subject'>Subject</label>
								<input type='text' name='subject' />
							</div>
							{/* <Input.TextField name="message" /> */}
							<div className='fc-input'>
								<label id='message'>Message</label>
								<input type='text-field' name='message' />
							</div>
						</form>
					</section>
				</div>
			</main>
		</div>
	);
}
