import React, { Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { filterTodo } from "./../../redux/ducks/search";

import "./style.scss";

class TodoListFooter extends Component { 

	constructor(props) {
		super(props)

		this.state = { 
			buttonFilter : ["Todos", "Feitos", "A fazer"],
			buttonSelected : 0
		}
	}

	render() {
		const { data, filterTodo } = this.props

		return (
			<div className="globo-esporte__todo-list__footer">
				<div>
					<span className="globo-esporte__todo-list__footer__items">
						{`
							Faltam ${data.data.filter(item => { 
								return item.status !== true	
							}).length} item`
						}
					</span>
				</div>
				<div>
					{
						this.state.buttonFilter.map( (buttonText, index ) => ( 
							<span
							key={index}
							onClick={ () => {filterTodo(buttonText); this.setState({...this.state, buttonSelected : index})}}
							className={`globo-esporte__todo-list__footer__button ${index === this.state.buttonSelected ? "globo-esporte__todo-list__footer__button--active" : ""}`}>
								{
									buttonText
								}
							</span>
						))
					}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({ 
	data : state.searchReducer
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ filterTodo }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TodoListFooter);