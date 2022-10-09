import React from "react";
import PropTypes from "prop-types";
import "./artist.scss";

class Artist extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-artist";
	}

	render() {
		return (
			<div className={ `${this.block_name}` }>
				<div className={ `${this.block_name}__header` } style={{ "--bg-image": `url(${this.props.image})` }}>
					<div className={ `${this.block_name}__title` }>{ this.props.name }</div>
				</div>
				<div className={ `${this.block_name}__tracks` }>
					{
						this.props.tracks.map((item, index) => {
							return (
								<div key={ index } className={ `${this.block_name}__track` }>Track</div>
							);
						})
					}
				</div>
			</div>
		);
	}
}

Artist.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	tracks: PropTypes.object,
	image: PropTypes.string
}

export default Artist;