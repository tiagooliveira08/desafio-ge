
import api from "./../../config.js";

export const Types = { 
	FILTER_TODO : "FILTER_TODO",
	HANDLE_SEARCH : "HANDLE_SEARCH",
	ADD_TODO : "ADD_TODO",
	DATA_API : "DATA_API",
	HANDLE_TOGGLE : "HANDLE_TOGGLE",
	REMOVE_TODO : "REMOVE_TODO"
}

const initialState = { 
	searchValue : "",
	data : [],
	filter : null
}
var statusFalse = "todo";
var statusTrue = "done";

export const searchReducer = (state = initialState, action) => {
	console.log(action)
	switch(action.type) {
		case Types.FILTER_TODO :  {
			console.log(action.payload, "enter reducer")
			return {...state, filter : action.payload}
		}

		case Types.DATA_API : { 
			console.log(action.payload.data, "data api")
			return { ...state, data : action.payload.data}
		}

		case Types.HANDLE_SEARCH : {
			return { ...state,  searchValue : action.payload.handleSearch.target.value}
		}

		case Types.ADD_TODO : {
			console.log(state.data)
				return {...state, searchValue : "" }
		}

		case Types.HANDLE_TOGGLE : {
			return {...state}
		}


	}

	return { ...state }
}



//actions Creators 

export const getTodoFromApi = (data) => { 
	return (dispatch, getState) => {
		api.get("http://localhost:3001/todos/index").then( (response) => {
			dispatch({
				type : Types.DATA_API,
				payload : { 
					data : response.data
				}
			})
		}).catch( error => {
		        throw new Error('Erro ao coletar Todos no servidor!'); 
		})
	}	
}


export const filterTodo = (filter) => { 
	return {
		type : Types.FILTER_TODO,
		payload : filter
	}
}

export  const handleSearch = (e) => { 
	return {
		type :Types.HANDLE_SEARCH, payload : { 
			handleSearch : e
		}
	} 
}

export const handleKeyDown = (e, searchValue) => { 
		return (dispatch) => {
	if(e.keyCode === 13 && e.keyCode !== ""){ 
		api.post("http://localhost:3001/todos/store", {
			title : searchValue, 
			status : false
		}).then( resp => dispatch(getTodoFromApi())	
		).then( dispatch({
			type : Types.ADD_TODO
		}))
	}
}
}

export const toggleTodo = (todo) => {
	return dispatch => { 
		api.put("http://localhost:3001/todos/update/"+todo._id, {
			status : !todo.status
		}).then( resp => {
			return dispatch(getTodoFromApi())
		})

	}
}
export const removeTodo = (todo) => { 
	return dispatch => { 
		console.log(todo._id);
		api.delete("http://localhost:3001/todos/destroy/"+todo._id).
			then( response => { 
				dispatch(getTodoFromApi())
			}).
			catch( error => { 
				throw new Error("Error ao remover Todo");
			})
	}
}


