import React, {Fragment} from "react";
import { connect } from "react-redux"; 
import { getTodoFromApi, toggleTodo, removeTodo } from "./../../redux/ducks/search.js";
import { bindActionCreators } from "redux";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle } from '@fortawesome/free-regular-svg-icons'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

import TodoListFooter from "./../todolistfooter/TodoListFooter";

class ToDoList extends React.Component {

	componentDidMount() {
		this.props.getTodoFromApi();
	}

	render() {
		const { data, filter } = this.props.apiData;
		const { toggleTodo, removeTodo } = this.props;
		console.log(filter);
		return(
			<Fragment>
					<div className="globo-esporte__todo-list">
						<table>
							<thead>
								<tr>
									<th>
										Nome da tarefa:
									</th>
									<th>
										Status:
									</th>
								</tr>
							</thead>
							<tbody>
								{

									data ? 
										data.filter(item => {
											switch(filter) {
												case "Feitos" : {
													return item.status === true
												} 
												case "A fazer" : {
													return item.status === false
												}
												case "Todos" : {
													return item
												}
												default : return item
											}
										}).map((item, index) => {
											return (
											<tr  className="globo-esporte__todo-list__item" key={index}>

													<td  className={item.status ? "done globo-esporte__todo-list__item--color-name" : null}> {item.title} </td>
													<td>
														{ item.status ? 
															<FontAwesomeIcon 
															icon={faCheck} color="green"
															 onClick={() => toggleTodo(item)}/> 
															 : null}
														{ !item.status ?
															<FontAwesomeIcon 
															icon={faDotCircle}  
															onClick={() => toggleTodo(item)}
															 color="#ccc"/> 
															 : null }
														<FontAwesomeIcon 	
														className="globo-esporte__todo-list__item__icon-delete" 
														color="#e87b7a"
														icon={faTimes}
														onClick={ () => removeTodo(item)}

														 />
													</td>
											</tr>
											)
										})
								:
								<tr><td className="globo-esporte__todo-list__message-no-items">Não há itens</td></tr>
							}
							</tbody>
						</table>
					</div>			
					<TodoListFooter />
			</Fragment>
		)
	}
}


const mapStateToProps = (state) => ({
	apiData : state.searchReducer
})

const mapDispatchToProps = (dispatch) => bindActionCreators({getTodoFromApi, toggleTodo, removeTodo}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);