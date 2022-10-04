import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./side-menu.scss";

class SideMenu extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-side-menu";

		this.state = {
			items: this.props.items
		}
	}

	handlerClickLink(id) {
		const new_items = [];

		this.state.items.map(( item ) => {
			const new_item = Object.assign({}, item);
			new_item.active = false;

			if (new_item.id == id) {``
				new_item.active = true;
			}

			new_items.push(new_item);
		});

		this.setState({
			items: new_items
		});
	}

	render() {
		return (
			<div className={ this.block_name }>
				<div className={ `${this.block_name}__main` }>
					<div className={ `${this.block_name}__header` }>
						<img className={ `${this.block_name}__icon` } src={ this.props.icon } />
						<div className={ `${this.block_name}__title h2` }>{ this.props.title }</div>
					</div>
					<div className={ `${this.block_name}__items` }>
						{ this.state.items.map((item, index) => {
							return <Link 
								key={ index }
								className={ `${this.block_name}__item ${ item.active ? "active" : "" }` }
								to={ item.link }
								onClick={ () => this.handlerClickLink(item.id) }>

								<img className={ `${this.block_name}__item-icon` } style={{ "--icon": `url(${item.icon})` }} />
								<div className={ `${this.block_name}__item-title h4` }>{ item.title }</div>
							</Link>
						})}
					</div>
				</div>
			</div>
		);
	}
}

SideMenu.propTypes = {
	icon: PropTypes.string,
	title: PropTypes.string,
	items: PropTypes.array,
};

export default SideMenu;