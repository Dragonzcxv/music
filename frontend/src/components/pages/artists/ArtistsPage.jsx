import React from "react";
import Search from "../../common/search/Search";
import "./artists-page.scss";

class ArtistsPage extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-artists-page";
	}

	handleChangeSearch() {
		console.log("Поиск");
	}

	render() {
		return (
			<div className={ `${this.block_name}` }>
				<Search placeholder="Поиск" onChange={ () => this.handleChangeSearch() }></Search>
			</div>
		);
	}
}

export default ArtistsPage;