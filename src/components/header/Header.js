import React, {Fragment} from "react";
import "./style.css";

class Header extends React.Component {
	render() {
		var isDate = this.props.isDate;
		var	dateContent;
		var today = new Date();
		var daysName = [
			"Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"
		]
		var monthName = [
			"jan", "fev", "mar", "abril", "maio", "jun", "jul", "ago", "set", "out", "nov", "dez" 
		]

		return (
			<Fragment>
				<header className="globo-esporte__header">
					<h1 className="globo-esporte__header__logo">{this.props.title}</h1>

					{isDate ? ( 
						<div className="globo-esporte__header__date-space">
							<div className="globo-esporte__header__date-space__day">
								{today.getDate()}
							</div>
							<div className="globo-esporte__header__date-space__content">
								<div className="globo-esporte__header__date-space__content__day-name">
									{daysName[today.getDay() -1]}
								</div>
								<div className="globo-esporte__header__date-space__content__month-and-year">
									<span>{monthName[today.getMonth()]}</span>
									<span>{today.getFullYear()}</span>
								</div>
							</div>
						</div>
					)
					: null} 
				</header>
			</Fragment>
			)
	}
}

export default Header;