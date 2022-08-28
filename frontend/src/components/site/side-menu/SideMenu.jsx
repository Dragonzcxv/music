import React from "react";
import "./side-menu.scss";

class SideMenu extends React.Component {
	block_name = "b-side-menu";

	constructor(props) {
		super(props);

		console.log(props);
	}

	render() {
		return (
			<div className={ this.block_name }>
				<div className={ `${this.block_name}__header` }>
					<img className={ `${this.block_name}__icon` } src={this.props.icon} />
					<div className={ `${this.block_name}__title h2` }>{ this.props.title }</div>
				</div>
				<div className={ `${this.block_name}__items` }>
					{ this.props.items.map((item, index) => {
						return <a key={ index } className={ `${this.block_name}__item` } href={ item.link }>
							<img className={ `${this.block_name}__item-icon` } style={{ "--icon": `url(${item.icon})` }} />
							<div className={ `${this.block_name}__item-title h4` }>{ item.title }</div>
						</a>
					})}
				</div>
			</div>
		);
	}
}

export default SideMenu;