import React from "react";
import PropTypes from 'prop-types';
import "./subscribe-button.scss";

class SubscribeButton extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-subscribe-button";
		this.text = this.props.isSubscribe ? "Subscribed" : "Subscribe";
		this.class = this.props.isSubscribe ? "active" : "";
	}

	render() {
		return (
			<div className={ `${this.block_name} ${this.class}` }>
				<div className={ `${this.block_name}__name h4` }>{ this.text }</div>
			</div>
		);
	}
}

SubscribeButton.defaultProps = {
	isSubscribe: false
};

SubscribeButton.propTypes = {
	isSubscribe: PropTypes.bool,
};

export default SubscribeButton;