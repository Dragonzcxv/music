import React from "react";
import Artist from "../../common/artist/Artist";
import Search from "../../common/search/Search";
import "./artists-page.scss";

class ArtistsPage extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-artists-page";
		this.artists = this.getArtists();
	}

	handleChangeSearch() {
		console.log("Поиск");
	}

	getArtists() {
		return [
			{
				id: 1,
				name: "Artist",
				image: "/mock/artist/bg_image_small.jpg",
				tracks: [
					{
						id: 1,
						name: "TrackName",
						artist: "Artist",
						duration: "1:00",
						isFavorite: false,
						isPlay: false
					},
					{
						id: 2,
						name: "TrackName",
						artist: "Artist",
						duration: "1:00",
						isFavorite: false,
						isPlay: false
					},
					{
						id: 3,
						name: "TrackName",
						artist: "Artist",
						duration: "1:00",
						isFavorite: false,
						isPlay: false
					}
				]
			},
			{
				id: 2,
				name: "Artist",
				image: "/mock/artist/bg_image_small.jpg",
				tracks: [
					{
						id: 4,
						name: "TrackName",
						artist: "Artist",
						duration: "1:00",
						isFavorite: false,
						isPlay: false
					},
					{
						id: 5,
						name: "TrackName",
						artist: "Artist",
						duration: "1:00",
						isFavorite: false,
						isPlay: false
					},
					{
						id: 6,
						name: "TrackName",
						artist: "Artist",
						duration: "1:00",
						isFavorite: false,
						isPlay: false
					}
				]
			},			{
				id: 3,
				name: "Artist",
				image: "/mock/artist/bg_image_small.jpg",
				tracks: [
					{
						id: 7,
						name: "TrackName",
						artist: "Artist",
						duration: "1:00",
						currentDuration: "0:00",
						isFavorite: false,
						isPlay: false
					},
					{
						id: 8,
						name: "TrackName",
						artist: "Artist",
						duration: "1:00",
						isFavorite: false,
						isPlay: false
					},
					{
						id: 9,
						name: "TrackName",
						artist: "Artist",
						duration: "1:00",
						isFavorite: false,
						isPlay: false
					}
				]
			}
		];
	}

	render() {
		return (
			<div className={ `${this.block_name}` }>
				<div className={ `${this.block_name}__search` }>
					<Search placeholder="Поиск" onChange={ () => this.handleChangeSearch() }></Search>
				</div>
				<div className={ `${this.block_name}__artists` }>
					{
						this.artists.map((item, index) => {
							return (
								<div key={ index } className={ `${this.block_name}__artist` }>
									<Artist 
										id={ item.id }
										name={ item.name }
										image={ item.image }
										tracks={ item.tracks }
									/>
								</div>
							);
						})
					}
				</div>
			</div>
		);
	}
}

export default ArtistsPage;