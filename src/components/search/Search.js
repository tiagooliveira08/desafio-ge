import React, { Fragment } from "react";
import "./style.css";
import { handleSearch, handleKeyDown } from "./../../redux/ducks/search.js"; 
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Search extends React.Component {

	render() {
		const  { searchValue } =  this.props.searchReducer;
		const { handleSearch, handleKeyDown } = this.props;
		

		return (
			<Fragment>
					<div className="globo-esporte__seach">
						<input placeholder="Escreva aqui uma nova tarefa..." type="text" value={searchValue} 
						onChange={(e) => handleSearch(e)}
						onKeyDown={(e) => handleKeyDown(e, searchValue)}
						 />
					</div> 			
			</Fragment>
		)
	}

}

const mapStateToProps = (state) => ({ 
	searchReducer : state.searchReducer

})

const mapDispatchToProps = (dispatch) => bindActionCreators({handleSearch, handleKeyDown}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search);