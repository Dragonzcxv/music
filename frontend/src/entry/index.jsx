import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "components/site/header/Header";
import Footer from "components/site/footer/Footer";
import Home from "components/pages/home/Home";
import NotFound from "components/pages/not-found/NotFound";
import "normalize.css";
import "styles/layout/index";

$(() => {
	ReactDOM.createRoot( document.getElementById("app") )
		.render(
			<Router>
				<Header />
				<main className="b-main">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</Router>
		);
});
