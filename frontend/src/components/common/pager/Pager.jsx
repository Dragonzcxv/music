import React from "react";
import PropTypes from "prop-types";
import "./pager.scss";

class Pager extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-pager";
		this.pages = Math.ceil(this.props.elementsCount / this.props.elementsOnPage);
		this.prev = `/${this.props.sectionPath}/${this.props.currentPage - 1}/`;
		this.next = `/${this.props.sectionPath}/${this.props.currentPage + 1}/`;
		this.mod = "";

		// Формируем массив 5-ти страниц
		this.middle = [{
			number: this.props.currentPage,
			link: `/${this.props.sectionPath}/${this.props.currentPage}/`,
		}];

		for (let i = 0; i < 5; i++) {
			let number = 0;

			if (this.middle[this.middle.length - 1].number < this.pages) {
				number = this.middle[this.middle.length -1].number + 1;

				this.middle.push({
					number: number,
					link: `/${this.props.sectionPath}/${number}/`
				});
			} else {
				number = this.middle[0].number - 1;

				this.middle.unshift({
					number: number,
					link: `/${this.props.sectionPath}/${number}/`
				});	
			}
		}

		// Настраиваем отображение пагинатора
		if (this.props.currentPage != 1) {
			this.mod += " start";

			if (this.props.currentPage != 2) {
				this.mod += " s-start";
			}
		}

		if ((this.props.currentPage != this.pages) && ((this.props.currentPage + 5) < this.pages)) {
			this.mod += " end";

			if ((this.props.currentPage != (this.pages - 1)) && ((this.props.currentPage + 5) < (this.pages - 1))) {
				this.mod += " s-end";
			}
		}
	}

	render() {
		return (
			<div className={ `${this.block_name} ${this.mod}` }>
				<a href={ this.prev } className={ `${this.block_name}__prev` }></a>
				<div className={ `${this.block_name}__pages` }>
					<div className={ `${this.block_name}__start` }>
						<a className={ `${this.block_name}__page` }>1</a>
					</div>
					<div className={ `${this.block_name}__space start` }></div>
					<div className={ `${this.block_name}__middle` }>
						{
							this.middle.map((item, index) => {
								return (
									<a 
										key={ index }
										href={ item.link }
										className={ `${this.block_name}__page ${item.number == this.props.currentPage ? "active" : '' }` }>
										{ item.number }
									</a>	
								);
							})
						}
					</div>
					<div className={ `${this.block_name}__space end` }></div>
					<div className={ `${this.block_name}__end` }>
						<a className={ `${this.block_name}__page` }>{ this.pages }</a>
					</div>
				</div>
				<a href={ this.next } className={ `${this.block_name}__next` }></a>
			</div>
		);
	}
}

Pager.propTypes = {
	sectionPath: PropTypes.string,
	elementsCount: PropTypes.number,
	elementsOnPage: PropTypes.number,
	currentPage: PropTypes.number,
	getParamName: PropTypes.string
}

export default Pager;