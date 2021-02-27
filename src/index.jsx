import React from 'react';
import ReactDOM from 'react-dom';
import CalcButton from './CalcButton/CalcButton';
import CalcDisplay from './CalcDisplay/CalcDisplay';
import Calcheader from './CalcHeader/CalcHeader';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>

		<div className="wrapper">
			
			<Calcheader></Calcheader>
			<CalcDisplay></CalcDisplay>
			<CalcButton></CalcButton>

		</div>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
