import React from 'react';

const TextField = ({name, label}) => (
		<div className="row">
			<div className="col-25"><label>{label} :</label></div>
			<div className="col-75"> <input type='text' name={name}/> </div>
		</div>
	);

export default TextField;
