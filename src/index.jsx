import React from 'react';
import ReactDOM from 'react-dom';
import CalcButton from './CalcButton/CalcButton';
import CalcDispalay from './CalcDispalay/CalcDispalay';
import Calcheader from './calcHeader/CalcHeader';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>

		<Calcheader></Calcheader>
		<CalcDispalay></CalcDispalay>
		<CalcButton></CalcButton>
		
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
