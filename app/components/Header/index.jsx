import React from "react";
// import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import SkipToMain from "./SkipToMain";
import Nav from "./Nav";
// import ScrollToTop from "./ScrollToTop";

const Header = () => {
	return (
		<header className={styles.Header}>
			<SkipToMain />
			<Nav />
			{/* <ScrollToTop /> */}
		</header>
	);
};

// Header.defaultProps = {
// 	id: "string id needed",
// };

// Header.propTypes = {
// 	children: PropTypes.node,
// };

export default Header;

/*

<Header>
    <More_Content />
</Header>;

*/
