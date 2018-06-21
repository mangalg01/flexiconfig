import './index.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Flexi from './Flexi';
const flexiConfig = {
	items: [
		{
			"name" : "person_Name",
			"label" : "Person's Name",
			"type" : "TextField",	
		},
		{
			"name" : "state",
			"label" : "Person's State",
			"type" : "DropDown",
			"values" : [
				"Maharashtra",
				"Karnataka",
				"Kerala",
				"Madhya Pradesh"
			]
		},
	]
};

class App extends Component{
	constructor(props) {
		super(props);
		this.onFlexSubmit = this.onFlexSubmit.bind(this);
		this.showPersonData = this.showPersonData.bind(this);
		this.getTableData = this.getTableData.bind(this);
		this.state = ({
			personData: []
		})
	}
	onFlexSubmit(values) {
		console.log(values.person_Name +" " +values.state);
		let personData = this.state.personData;
		personData.push(values);
		this.setState({
			personData : personData
		})
	}
	getTableData() {
		const values  = this.state.personData;
		let data = null;
		if(values) {
		data = values.map(value => 
			<tr>
				<td>{value.person_Name}</td>
				<td>{value.state}</td> 
			</tr>
		
		);
	}
		return data;
	}
	showPersonData() {
		return (
			<table className="table-all">
  				<tr>
    				<th>Name</th>
    				<th>State</th> 
  				</tr>
  				{this.getTableData()}
  			</table>
  		)
	}
 	render() {
		return(
			<div>
				<Flexi config={flexiConfig} onSubmit={this.onFlexSubmit}/>
				{this.showPersonData()}
			</div>
			);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));