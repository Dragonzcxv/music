import React from "react";
import Album from "../../common/album/Album";
import MainBanner from "../../common/main-banner/MainBanner";
import "./home.scss";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-home";
	}

	getPopularArtists() {
		return [
			{
				image: "/mock/artist/bg_image_small.jpg",
				image_alt: "",
				name: "Artist name",
				link: "/"
			},
			{
				image: "/mock/artist/bg_image_small.jpg",
				image_alt: "",
				name: "Artist name",
				link: "/"
			},
			{
				image: "/mock/artist/bg_image_small.jpg",
				image_alt: "",
				name: "Artist name",
				link: "/"
			},
			{
				image: "/mock/artist/bg_image_small.jpg",
				image_alt: "",
				name: "Artist name",
				link: "/"
			},
			{
				image: "/mock/artist/bg_image_small.jpg",
				image_alt: "",
				name: "Artist name",
				link: "/"
			},
			{
				image: "/mock/artist/bg_image_small.jpg",
				image_alt: "",
				name: "Artist name",
				link: "/"
			}
		];
	}

	render() {
		return (
			<div className={ `${this.block_name}` }>
				<div className={ `${this.block_name}__banner l-negative-container-all` }>
					<MainBanner
						title="Welcome to Music Project"
						bg_image="/mock/home/banner.png"
					/>
				</div>
				<div className={ `${this.block_name}__title h4` }>Most popular artists</div>
				<div className={ `${this.block_name}__artists` }>
					{
						this.getPopularArtists().map(( item, index ) => {
							return <Album
								key={ index }
								image={ item.image }
								image_alt={ item.image_alt }
								name={ item.name }
								link={ item.link }
							/>
						})
					}
				</div>
			</div>
		);
	}
}

export default Home;