import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./pager.scss";

class Pager extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-pager";
	}

	init () {
		this.pages = Math.ceil(this.props.elementsCount / this.props.elementsOnPage);
		this.start = `/${this.props.sectionPath}/?${this.props.getParamName}=${1}`;
		this.last = `/${this.props.sectionPath}/?${this.props.getParamName}=${this.pages}`;
		this.prev = `/${this.props.sectionPath}/?${this.props.getParamName}=${this.props.currentPage - 1}`;
		this.next = `/${this.props.sectionPath}/?${this.props.getParamName}=${this.props.currentPage + 1}`;
		this.mod = "";

		// Формируем массив 5-ти страниц
		this.middle = [{
			number: this.props.currentPage,
			link: `/${this.props.sectionPath}/?${this.props.getParamName}=${this.props.currentPage}`,
		}];

		let loop = 5;

		if (window.screen.width <= 500 ) {
			loop = 2;
		}

		for (let i = 0; i < loop; i++) {
			let number = 0;

			if (this.middle[this.middle.length - 1].number < this.pages) {
				number = this.middle[this.middle.length -1].number + 1;

				this.middle.push({
					number: number,
					link: `/${this.props.sectionPath}/?${this.props.getParamName}=${number}`
				});
			} else {
				number = this.middle[0].number - 1;

				this.middle.unshift({
					number: number,
					link: `/${this.props.sectionPath}/?${this.props.getParamName}=${number}`
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

		if (this.props.currentPage == 1) {
			this.mod += " prev-disable";
		}

		if (this.props.currentPage == this.pages) {
			this.mod += " next-disable";
		}
	}

	render() {
		// Инициализация параметров перед рендером
		this.init();

		return (
			<div className={ `${this.block_name} ${this.mod}` }>
				<div className={ `${this.block_name}__start-mobile` }>
					<Link onClick={ () => { this.props.onClickPage(1); } } to={ this.start }>{ this.props.firstPageLabel }</Link>
				</div>
				<Link onClick={ () => { this.props.onClickPage(this.props.currentPage - 1); } } to={ this.prev } className={ `${this.block_name}__prev` }></Link>
				<div className={ `${this.block_name}__pages` }>
					<div className={ `${this.block_name}__start` }>
						<Link onClick={ () => { this.props.onClickPage(1); } } to={ this.start } className={ `${this.block_name}__page` }>1</Link>
					</div>
					<div className={ `${this.block_name}__space start` }></div>
					<div className={ `${this.block_name}__middle` }>
						{
							this.middle.map((item, index) => {
								return (
									<Link 
										key={ index }
										to={ item.link }
										onClick={ () => { this.props.onClickPage(item.number); } }
										className={ `${this.block_name}__page ${item.number == this.props.currentPage ? "active" : '' }` }>
										{ item.number }
									</Link>	
								);
							})
						}
					</div>
					<div className={ `${this.block_name}__space end` }></div>
					<div className={ `${this.block_name}__end` }>
						<Link onClick={ () => { this.props.onClickPage(this.pages); } } to={ this.last } className={ `${this.block_name}__page` }>{ this.pages }</Link>
					</div>
				</div>
				<Link onClick={ () => { this.props.onClickPage(this.props.currentPage + 1); } } to={ this.next } className={ `${this.block_name}__next` }></Link>
				<div className={ `${this.block_name}__end-mobile` }>
					<Link onClick={ () => { this.props.onClickPage(this.pages); } } to={ this.last }>{ this.props.lastPageLabel }</Link>
				</div>
			</div>
		);
	}
}

Pager.propTypes = {
	sectionPath: PropTypes.string,
	elementsCount: PropTypes.number,
	elementsOnPage: PropTypes.number,
	currentPage: PropTypes.number,
	getParamName: PropTypes.string,
	firstPageLabel: PropTypes.string,
	lastPageLabel: PropTypes.string,
	onClickPage: PropTypes.func
}

export default Pager;