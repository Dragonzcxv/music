import React from "react";
import {
	Route,
	Routes,
	useParams,
	useLocation
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
				<Route path="/artists/" element={ <ArtistsRoute /> } />
				<Route path="/artists/:artist_code/" element={ <ArtistRoute /> } />
				<Route path="/artists/:artist_code/:album_code/" element={ <AlbumRoute /> } />
				<Route path="/account/" element={ <AccountPage /> } />
				<Route path="/playlist/" element={ <PlaylistPage /> } />
				<Route path="*" element={ <NotFound /> } />
			</Routes>
		);
	}
}

function useQuery() {
	const { search } = useLocation();
  
	return React.useMemo(() => new URLSearchParams(search), [search]);
}

// Обработка разводной страницы
function ArtistsRoute() {
	const query = useQuery();
	const page_param = query.get("page");
	let page = 1;

	if (page_param) {
		page = Number(query.get("page"));
	}

	if ((isNaN(page)) || (page <= 0)) {
		return (
			<NotFound />
		);
	} else {
		return (
			<ArtistsPage
				page={ page }
			/>
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