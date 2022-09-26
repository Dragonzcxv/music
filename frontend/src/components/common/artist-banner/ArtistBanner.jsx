import React from "react";
import PropTypes from 'prop-types';
import SubscribeButton from "components/common/subscribe-button/SubscribeButton";
import "./artist-banner.scss";

class ArtistBanner extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-artist-banner";
	}

	render() {
		return (
			<div className={ this.block_name }>
				<div className={ `${this.block_name}__back` } style={{ "--bg-image": `url(${this.props.bg_image})` }}></div>
				<div className={ `${this.block_name}__main` }>
					<img className={ `${this.block_name}__artist-img` } src={ this.props.image } alt={ this.props.image_alt } />
					<h1 className={ `${this.block_name}__name` }>{ this.props.name }</h1>
					<div className={ `${this.block_name}__subscribe` }>
						<SubscribeButton isSubscribe={ this.props.isSubscribe } />
					</div>
				</div>
			</div>
		);
	}
}

ArtistBanner.defaultProps = {
	image_alt: ""
};

ArtistBanner.propTypes = {
	name: PropTypes.string,
	isSubscribe: PropTypes.bool,
	bg_image: PropTypes.string,
	image: PropTypes.string,
	image_alt: PropTypes.string
};

export default ArtistBanner;