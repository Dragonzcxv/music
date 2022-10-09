import React from "react";
import PropTypes from "prop-types";
import "./search.scss";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-search";
	}

	render() {
		return (
			<div className={ `${this.block_name}` }>
				<div className={ `${this.block_name}__input-container` }>
					<input onChange={ () => {this.props.onChange()} } type="text" className={ `${this.block_name}__input` } placeholder={ this.props.placeholder } />
					<div className={ `${this.block_name}__icon` }></div>
				</div>
			</div>
		);
	}
}

Search.propTypes = {
	placeholder: PropTypes.string,
	onChange: PropTypes.func
}

export default Search;