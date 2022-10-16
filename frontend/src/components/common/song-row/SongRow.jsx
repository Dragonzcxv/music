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
			<div className={ `${this.block_name} ${ this.props.isActive ? 'active' : '' }` } onClick={ () => this.props.onClickPlay() }>
				<div className={ `${this.block_name}__image-container` }>
					<img className={ `${this.block_name}__album-image` } src={ this.props.album_image } alt={ this.props.ablum_image_alt } />
					<div
						className={ `${this.block_name}__play ${ this.props.isPlay ? 'play' : '' }` }></div>
				</div>
				<div className={ `${this.block_name}__name h3` }>
					{ this.props.name }
					<p className={ `${this.block_name}__album-name` }>{ this.props.album_name }</p>
				</div>
				<div
					className={ `${this.block_name}__favorite ${this.props.isFavorite ? 'active' : ''}` }
					onClick={ (e) => {
						// Останавливаем "всплытие" на родительском эвенте
						e.stopPropagation();
						this.props.onClickFavorite();
					} }>
				</div>
				<div className={ `${this.block_name}__duration` }>{ this.props.duration }</div>
				<div className={ `${this.block_name}__current-duration` }>{ this.props.currentDuration }</div>
			</div>
		);
	}
}

SongRow.defaultProps = {
	isFavorite: false,
	isPlay: false,
	isActive: false,
	currentDuration: "0:00"
};

SongRow.propTypes = {
	album_image: PropTypes.string,
	ablum_image_alt: PropTypes.string,
	name: PropTypes.string,
	album_name: PropTypes.string,
	isFavorite: PropTypes.bool,
	isPlay: PropTypes.bool,
	isActive: PropTypes.bool,
	onClickFavorite: PropTypes.func,
	onClickPlay: PropTypes.func,
	duration: PropTypes.string,
	currentDuration: PropTypes.number
};

export default SongRow;