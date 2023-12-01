import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Component = ({ children }) => {
	return <div className={styles.Component}>{children}</div>;
};

Component.defaultProps = {
	id: "string id needed",
};

Component.propTypes = {
	children: PropTypes.node,
};

export default Component;

/*

<Component>
    <More_Content />
</Component>;

*/
