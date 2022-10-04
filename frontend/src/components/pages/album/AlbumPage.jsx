import React from "react";
import "./album-page.scss";

class AlbumPage extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-album-page";

		// Символьные коды исполнителя и альбома
		// this.props.artist_code
		// this.props.album_code
	}

	render() {
		return (
			<div className={ `${this.block_name}` }>
				Album
			</div>
		);
	}
}

export default AlbumPage;