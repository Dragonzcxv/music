import React from "react";
import "./account-page.scss";

class AccountPage extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-account-page";

		// Символьные коды исполнителя и альбома
		// this.props.artist_code
		// this.props.album_code
	}

	render() {
		return (
			<div className={ `${this.block_name}` }>
				Account
			</div>
		);
	}
}

export default AccountPage;