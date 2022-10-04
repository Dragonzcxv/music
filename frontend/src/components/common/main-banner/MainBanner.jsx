import React from "react";
import PropTypes from 'prop-types';
import "./main-banner.scss";

class MainBanner extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-main-banner";
	}

	render() {
		return (
			<div className={ `${this.block_name}` }>
				<div className={ `${this.block_name}__back` } style={{ "--bg-image": `url(${this.props.bg_image})` }}></div>
				<h1 className={ `${this.block_name}__title` }>{ this.props.title }</h1>
			</div>
		);
	}
}

MainBanner.propTypes = {
	title: PropTypes.string,
	bg_image: PropTypes.string,
};

export default MainBanner;