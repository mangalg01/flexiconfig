import React, {Component} from 'react';
import TextField from './TextField';
import DropDown from './DropDown';

export default class Flexi extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}
	getFormTemplate(flexiConfig) {
		let template = null;
		if(flexiConfig && flexiConfig.items && Array.isArray(flexiConfig.items)) {
			template = flexiConfig.items.map((item, index) => {
				const {name, values, type} = item;
				let {label}  = item;
				if(type && name) {
					if(!label) {
						label = name;
					}
	
					switch(type) {
						case 'TextField' :
							return  <TextField name = {name} label = {label} key ={index}/>;
						case 'DropDown' :
							if(values && Array.isArray(values)){
								return <DropDown name = {name} label = {label} values = {values}/>;
							}
							return null;
						default : 
							return null;
		        	}
				}
			})
			return template;
		}
		return template;
	}

	onSubmit(event) {
		event.preventDefault();
		const values = {};
		const {target} = event;
		for(let i=0;i<target.length;i++) {
			if(target.type !== 'submit') {
				values[target[i].name] = target[i].value;
			}
		}
		document.getElementById("myForm").reset();
		this.props.onSubmit(values);

	}
	render() {
		const formTemplate = this.getFormTemplate(this.props.config);
		return(
			<div className="container">
				<form id="myForm" onSubmit = {this.onSubmit}>
					{formTemplate}
					<div className="row">
						<input type="submit" value="Submit"></input>
					</div>
				</form>
			</div>	
		);
	}

}