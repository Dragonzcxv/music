import React from "react";
import PropTypes from 'prop-types';
import "./song-row.scss";

class SongRow extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-song-row";
	}

	render() {
		return (
			<div className={ `${this.block_name}` }>
				<div className={ `${this.block_name}__number h3` }>{ this.props.number }</div>
				<div className={ `${this.block_name}__char` }>—</div>
				<img className={ `${this.block_name}__album-image` } src={ this.props.album_image } alt={ this.props.ablum_image_alt } />
				<div className={ `${this.block_name}__name h3` }>{ this.props.name }</div>
				<p className={ `${this.block_name}__album-name` }>{ this.props.album_name }</p>
				<div className={ `${this.block_name}__play ${ this.props.isPlay ? 'play' : '' }` }></div>
				<div className={ `${this.block_name}__favorite ${this.props.isFavorite ? 'active' : ''}` }></div>
			</div>
		);
	}
}

SongRow.defaultProps = {
	isFavorite: false,
	isPlay: false
};

SongRow.propTypes = {
	number: PropTypes.number,
	album_image: PropTypes.string,
	ablum_image_alt: PropTypes.string,
	name: PropTypes.string,
	album_name: PropTypes.string,
	isFavorite: PropTypes.bool,
	isPlay: PropTypes.bool
};

export default SongRow;