import React from 'react';

const DropDown = ({name, label, values}) => {
	
	const options = values.map((value, index) =>  (<option key={index} value={value}>{value}</option>));
	return (
		<div className="row">
			<div className="col-25">
				<label>{label} :</label>
			</div>
			<div className="col-75">		
				<select name={name}>
      			{options}
    			</select>
			</div>
		</div>
	)
}

export default DropDown;