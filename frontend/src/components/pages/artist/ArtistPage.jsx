import React from "react";
import ArtistBanner from "components/common/artist-banner/ArtistBanner";
import "./artist-page.scss";
import SongRow from "../../common/song-row/SongRow";
import Album from "../../common/album/Album";

class ArtistPage extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-artist-page";
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

	componentDidMount() {
		const it = $(this.el);
		const play_buttons = it.find(`.b-song-row__play`);
		
		// событие клика на "Избранное"
		it.find(`.b-song-row__favorite`).click(function() {
			$(this).toggleClass('active');

			// Добавляем или удаляем из избранного
			// TODO: метод добавления/удаления из избранного
		});

		// событие клика на "Play"
		play_buttons.click(function() {
			play_buttons.removeClass('play');
			$(this).addClass('play');

			// Запускаем\Останавливаем воспроизведение
			// TODO: метод запуска/остановки трека
		});
	}

	render() {
		const songs = this.getPopularSongs();
		const albums = this.getAlbums();

		return (
			<div className={ this.block_name } ref={el => this.el = el}>
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