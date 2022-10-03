import React from "react";
import PropTypes from 'prop-types';
import "./album.scss";

class Album extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-album";
	}

	render() {
		return (
			<div className={ `${this.block_name}` }>
				<img className={ `${this.block_name}__image` } src={ this.props.image } alt={ this.props.image_alt } />
				<div className={ `${this.block_name}__name h4` }>{ this.props.name }</div>
				<p className={ `${this.block_name}__year` }>{ this.props.year }</p>
				<a className={ `${this.block_name}__link` } href={ this.props.link }></a>
			</div>
		);
	}
}

Album.propTypes = {
	image: PropTypes.string,
	image_alt: PropTypes.string,
	year: PropTypes.string,
	name: PropTypes.string,
	link: PropTypes.string
};

export default Album;