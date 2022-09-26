import React from "react";
import ArtistBanner from "components/common/artist-banner/ArtistBanner";
import "./artist-page.scss";
import SongRow from "../../common/song-row/SongRow";

class ArtistPage extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-artist-page";
	}

	getPopularSongs() {
		return [
			{
				number: 1,
				album_image: "/mock/artist/album_image.jpg",
				ablum_image_alt: "name",
				name: "name",
				album_name: "album",
				isFavorite: false,
				isPlay: false
			},
			{
				number: 2,
				album_image: "/mock/artist/album_image.jpg",
				ablum_image_alt: "name",
				name: "name",
				album_name: "album",
				isFavorite: false,
				isPlay: false
			},
			{
				number: 3,
				album_image: "/mock/artist/album_image.jpg",
				ablum_image_alt: "name",
				name: "name",
				album_name: "album",
				isFavorite: false,
				isPlay: false
			},
			{
				number: 4,
				album_image: "/mock/artist/album_image.jpg",
				ablum_image_alt: "name",
				name: "name",
				album_name: "album",
				isFavorite: false,
				isPlay: false
			},
		];
	}

	render() {
		const data = this.getPopularSongs();

		return (
			<div className={ this.block_name }>
				<div className={ `${this.block_name}__banner l-negative-container-all` }>
					<ArtistBanner
						name="Artist"
						image="/mock/artist/bg_image_small.jpg"
						isSubscribe={ false }
						bg_image="/mock/artist/bg_image.jpg"
					/>
				</div>
				<div className="h4">Most popular</div>
				<div className={ `${this.block_name}__popular` }>
					{
						data.map(( item, index ) => {
							return <SongRow
								key={ index }
								number={ item.number }
								album_image={ item.album_image }
								album_image_alt={ item.album_image_alt }
								name={ item.name }
								album_name={ item.album_name }
								isFavorite={ item.isFavorite }
								isPlay={ item.isPlay }
							/>
						})
					}
				</div>
				<div className="h4">Albums</div>
			</div>
		);
	}
}

export default ArtistPage;