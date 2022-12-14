import React from "react";
import Artist from "../../common/artist/Artist";
import Pager from "../../common/pager/Pager";
import Search from "../../common/search/Search";
import PropTypes from "prop-types";
import "./artists-page.scss";

class ArtistsPage extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-artists-page";
		this.artists = this.getArtists();
		this.timerDurationId = null;

		this.state = {
			songs: this.getSongs(),
			page: this.props.page
		}
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
				link: "/artists/1/",
			},
			{
				id: 2,
				name: "Artist",
				image: "/mock/artist/bg_image_small.jpg",
				link: "/artists/1/",
			},			
			{
				id: 3,
				name: "Artist",
				image: "/mock/artist/bg_image_small.jpg",
				link: "/artists/1/",
			}
		];
	}

	getSongs() {
		return [
			{
				id: 1,
				artistId: 1, 
				album_image: "/mock/artist/album_image.jpg",
				albim_image_alt: "album",
				name: "Track",
				album_name: "Album",
				currentDuration: 0,
				duration: "1:00",
				isFavorite: false,
				isPlay: false,
				isActive: false
			},
			{
				id: 2,
				artistId: 1, 
				album_image: "/mock/artist/album_image.jpg",
				albim_image_alt: "album",
				name: "Track",
				album_name: "Album",
				currentDuration: 0,
				duration: "1:00",
				isFavorite: false,
				isPlay: false,
				isActive: false
			},
			{
				id: 3,
				artistId: 1, 
				album_image: "/mock/artist/album_image.jpg",
				albim_image_alt: "album",
				name: "Track",
				album_name: "Album",
				currentDuration: 0,
				duration: "1:00",
				isFavorite: false,
				isPlay: false,
				isActive: false
			},
			{
				id: 4,
				artistId: 2, 
				album_image: "/mock/artist/album_image.jpg",
				albim_image_alt: "album",
				name: "Track",
				album_name: "Album",
				currentDuration: 0,
				duration: "1:00",
				isFavorite: false,
				isPlay: false,
				isActive: false
			},
			{
				id: 5,
				artistId: 2, 
				album_image: "/mock/artist/album_image.jpg",
				albim_image_alt: "album",
				name: "Track",
				album_name: "Album",
				currentDuration: 0,
				duration: "1:00",
				isFavorite: false,
				isPlay: false,
				isActive: false
			},
			{
				id: 6,
				artistId: 2, 
				album_image: "/mock/artist/album_image.jpg",
				albim_image_alt: "album",
				name: "Track",
				album_name: "Album",
				currentDuration: 0,
				duration: "1:00",
				isFavorite: false,
				isPlay: false,
				isActive: false
			},
			{
				id: 7,
				artistId: 3, 
				album_image: "/mock/artist/album_image.jpg",
				albim_image_alt: "album",
				name: "Track",
				album_name: "Album",
				currentDuration: 0,
				duration: "1:00",
				isFavorite: false,
				isPlay: false,
				isActive: false
			},
			{
				id: 8,
				artistId: 3, 
				album_image: "/mock/artist/album_image.jpg",
				albim_image_alt: "album",
				name: "Track",
				album_name: "Album",
				currentDuration: 0,
				duration: "1:00",
				isFavorite: false,
				isPlay: false,
				isActive: false
			},
			{
				id: 9,
				artistId: 3, 
				album_image: "/mock/artist/album_image.jpg",
				albim_image_alt: "album",
				name: "Track",
				album_name: "Album",
				currentDuration: 0,
				duration: "1:00",
				isFavorite: false,
				isPlay: false,
				isActive: false
			}
		]
	}

	getSongsByArtistId(id) {
		return this.state.songs.filter(song => song.artistId == id);
	}

	/**
	 * Метод, вызываемый при клике на "Добавить в избранное"
	 * @param { int } id - Индефикатор трека 
	 */
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

	/**
	 * Находит трек по id и обновляет его текущую продолжительность
	 * @param { int } id - Индификатор трека 
	 */
	updateSongDuration(id) {
		const new_songs = [];

		this.state.songs.map(( item ) => {
			let song = Object.assign({}, item);

			if (item.id == id) {
				song.currentDuration = song.currentDuration + 1;
			}

			new_songs.push(song);
		});

		this.setState({
			songs: new_songs
		});
	}

	/**
	 * Метод, вызываемый при клике на блок трека
	 * @param { int } id - Индефикатор трека
	 */
	handleClickPlay(id) {
		const new_songs = [];

		this.state.songs.map(( item ) => {
			let song = Object.assign({}, item);

			if (item.id == id) {
				song.isActive = true;
				song.isPlay = !song.isPlay;

				if (this.timerDurationId) {
					clearTimeout(this.timerDurationId);
				}

				if (song.isActive && song.isPlay) {
					// TODO: Заменить функционал мусорного подсчёта времени при функционале прослушивания
					this.timerDurationId = setInterval(() => {
						this.updateSongDuration(id);
					}, 1000);
				}
			} else {
				song.currentDuration = 0;
				song.isPlay = false;
				song.isActive = false;
			}

			new_songs.push(song);
		});

		this.setState({
			songs: new_songs
		});
	}

	handleClickPage(page) {
		this.setState({
			page: page
		});
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
										link={ item.link }
										image={ item.image }
										songs={ this.getSongsByArtistId(item.id) }
										onClickFavorite={ (id) => this.handleClickFavorite(id) }
										onClickPlay={ (id) => this.handleClickPlay(id) }
									/>
								</div>
							);
						})
					}
				</div>
				<div className={ `${this.block_name}__pager` }>
					<Pager
						sectionPath="artists"
						elementsCount={ 51 } // Заменить на текущее число исполнителей
						elementsOnPage={ 2 }
						currentPage={ this.state.page }
						getParamName="page"
						firstPageLabel="First Page"
						lastPageLabel="Last Page"
						onClickPage={ (page) => this.handleClickPage(page) }
					/>
				</div>
			</div>
		);
	}
}

ArtistsPage.defaultProps = {
	page: 1
};

ArtistsPage.propTypes = {
	page: PropTypes.number,
}

export default ArtistsPage;