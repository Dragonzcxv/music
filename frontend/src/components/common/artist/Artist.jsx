import React from "react";
import PropTypes from "prop-types";
import "./artist.scss";
import SongRow from "../song-row/SongRow";

class Artist extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-artist";
	}

	render() {
		return (
			<div className={ `${this.block_name}` }>
				<div className={ `${this.block_name}__header` } style={{ "--bg-image": `url(${this.props.image})` }}>
					<a className={ `${this.block_name}__link` } href={ this.props.link }></a>
					<div className={ `${this.block_name}__title` }>{ this.props.name }</div>
				</div>
				<div className={ `${this.block_name}__songs` }>
					{
						this.props.songs.map((item, index) => {
							return (
								<SongRow
									key={ index }
									id={ item.id }
									name={ item.name }
									album_image={ item.album_image }
									album_image_alt={ item.album_image_alt }
									album_name={ item.album_name }
									duration={ item.duration }
									currentDuration={ item.currentDuration }
									isFavorite={ item.isFavorite }
									isPlay={ item.isPlay }
									isActive={ item.isActive }
									onClickFavorite={ () => this.props.onClickFavorite(item.id) }
									onClickPlay={ () => this.props.onClickPlay(item.id) }
								/>
							);
						})
					}
				</div>
			</div>
		);
	}
}

Artist.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	link: PropTypes.string,
	songs: PropTypes.array,
	image: PropTypes.string,
	onClickFavorite: PropTypes.func,
	onClickPlay: PropTypes.func
}

export default Artist;