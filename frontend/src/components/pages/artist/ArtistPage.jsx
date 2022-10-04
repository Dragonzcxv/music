import React from "react";
import ArtistBanner from "components/common/artist-banner/ArtistBanner";
import "./artist-page.scss";
import SongRow from "../../common/song-row/SongRow";
import Album from "../../common/album/Album";

class ArtistPage extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-artist-page";
		this.state = {
			songs: this.getPopularSongs(),
		};

		// Символьный код исполнителя
		// console.log(this.props.artist_code);
	}

	getAlbums() {
		return [
			{
				image: "/mock/artist/album_image.jpg",
				image_alt: "",
				year: "2022",
				name: "album name",
				link: "/"
			},
			{
				image: "/mock/artist/album_image.jpg",
				image_alt: "",
				year: "2022",
				name: "album name",
				link: "/"
			},
			{
				image: "/mock/artist/album_image.jpg",
				image_alt: "",
				year: "2022",
				name: "album name",
				link: "/"
			},
			{
				image: "/mock/artist/album_image.jpg",
				image_alt: "",
				year: "2022",
				name: "album name",
				link: "/"
			},
			{
				image: "/mock/artist/album_image.jpg",
				image_alt: "",
				year: "2022",
				name: "album name",
				link: "/"
			},
			{
				image: "/mock/artist/album_image.jpg",
				image_alt: "",
				year: "2022",
				name: "album name",
				link: "/"
			}
		];
	}

	getPopularSongs() {
		return [
			{
				id: 1,
				number: 1,
				album_image: "/mock/artist/album_image.jpg",
				ablum_image_alt: "name",
				name: "name",
				album_name: "album",
				isFavorite: false,
				isPlay: false
			},
			{
				id: 2,
				number: 2,
				album_image: "/mock/artist/album_image.jpg",
				ablum_image_alt: "name",
				name: "name",
				album_name: "album",
				isFavorite: false,
				isPlay: false
			},
			{
				id: 3,
				number: 3,
				album_image: "/mock/artist/album_image.jpg",
				ablum_image_alt: "name",
				name: "name",
				album_name: "album",
				isFavorite: false,
				isPlay: false
			},
			{
				id: 4,
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

	handleClickFavorite(id) {
		const new_songs = [];

		this.state.songs.map(( item ) => {
			let song = Object.assign({}, item);

			if (item.id == id) {``
				song.isFavorite = !song.isFavorite;
			}

			new_songs.push(song);
		});

		this.setState({
			songs: new_songs
		});
	}

	handleClickPlay(id) {
		const new_songs = [];

		this.state.songs.map(( item ) => {
			let song = Object.assign({}, item);

			if (item.id == id) {
				song.isPlay = !song.isPlay;
			} else {
				song.isPlay = false;
			}

			new_songs.push(song);
		});

		this.setState({
			songs: new_songs
		});
	}

	render() {
		const songs = this.state.songs;
		const albums = this.getAlbums();

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
				<div className={ `${this.block_name}__title h4` }>Most popular</div>
				<div className={ `${this.block_name}__popular` }>
					{
						songs.map(( item, index ) => {
							return <SongRow
								key={ index }
								number={ item.number }
								album_image={ item.album_image }
								album_image_alt={ item.album_image_alt }
								name={ item.name }
								album_name={ item.album_name }
								isFavorite={ item.isFavorite }
								isPlay={ item.isPlay }
								onClickFavorite={ () => this.handleClickFavorite(item.id) }
								onClickPlay={ () => this.handleClickPlay(item.id) }
							/>
						})
					}
				</div>
				<div className={ `${this.block_name}__title h4` }>Albums</div>
				<div className={ `${this.block_name}__albums` }>
					{
						albums.map(( item, index ) => {
							return <Album
								key={ index }
								image={ item.image }
								image_alt={ item.image_alt }
								name={ item.name }
								year={ item.year }
								link={ item.link }
							/>
						})
					}
				</div>
			</div>
		);
	}
}

export default ArtistPage;