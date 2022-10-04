import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideMenu from "components/site/side-menu/SideMenu";
import "normalize.css";
import "styles/layout/index";
import Navigation from "../components/navigation/Navigation";

$(() => {
	const menu_items = [
		{
			id: 1,
			title: "Home",
			icon: '/mock/side-menu/home.png',
			link: "/",
			active: document.location.pathname == "/",
		},
		{
			id: 2,
			title: 'Playlist',
			icon: '/mock/side-menu/playlist.svg',
			link: "/playlist/",
			active: document.location.pathname == "/playlist/",
		},
		{
			id: 3,
			title: 'Artists',
			icon: '/mock/side-menu/artist.png',
			link: "/artists/",
			active: document.location.pathname == "/artists/",
		},
		{
			id: 4,
			title: "My Account",
			icon: '/mock/side-menu/my-account.png',
			link: "/account/",
			active: document.location.pathname == "/account/",
		},
	];

	ReactDOM.createRoot( document.getElementById("app") )
		.render(
			<Router>
				<SideMenu
					title="Music"
					icon="/mock/side-menu/icon.png"
					items={ menu_items }
				/>
				<main className="b-main">
					<Navigation />
				</main>
			</Router>
		);
});
