import React from "react";
import {
	Route,
	Routes,
	useParams
} from "react-router-dom";
import Home from "components/pages/home/Home";
import NotFound from "components/pages/not-found/NotFound";
import "normalize.css";
import "styles/layout/index";
import ArtistsPage from "components/pages/artists/ArtistsPage";
import ArtistPage from "components/pages/artist/ArtistPage";
import AlbumPage from "../pages/album/AlbumPage";
import AccountPage from "../pages/account/AccountPage";
import PlaylistPage from "../pages/playlist/PlaylistPage";

class Navigation extends React.Component {
	render() {
		return (
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/artists/" element={ <ArtistsPage /> } />
				<Route path="/artists/:artist_code/" element={ <ArtistRoute /> } />
				<Route path="/artists/:artist_code/:album_code/" element={ <AlbumRoute /> } />
				<Route path="/account/" element={ <AccountPage /> } />
				<Route path="/playlist/" element={ <PlaylistPage /> } />
				<Route path="*" element={ <NotFound /> } />
			</Routes>
		);
	}
}

function AlbumRoute() {
	const { artist_code, album_code } = useParams();

	// TODO: Проверка на существование страницы
	
	return (
		<AlbumPage artist_code={ artist_code } album_code={album_code} />
	);
}

function ArtistRoute() {
	const { artist_code } = useParams();

	// TODO: Проверка на существование страницы
	
	return (
		<ArtistPage artist_code={ artist_code } />
	);
}

export default Navigation;