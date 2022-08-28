import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "components/pages/home/Home";
import NotFound from "components/pages/not-found/NotFound";
import "normalize.css";
import "styles/layout/index";
import SideMenu from "../components/site/side-menu/SideMenu";

$(() => {
	const menu_items = [
		{
			title: "Home",
			icon: '/mock/side-menu/home.png',
			link: "/",
		},
		{
			title: 'Playlist',
			icon: '/mock/side-menu/playlist.svg',
			link: "/",
		},
		{
			title: 'Artist',
			icon: '/mock/side-menu/artist.png',
			link: "/",
		},
		{
			title: 'Premium',
			icon: '/mock/side-menu/premium.svg',
			link: "/",
		},
		{
			title: "My Account",
			icon: '/mock/side-menu/my-account.png',
			link: "/",
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
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
			</Router>
		);
});
