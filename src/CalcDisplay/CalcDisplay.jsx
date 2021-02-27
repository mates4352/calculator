import React from 'react';
import s from "./CalcDisplay.module.scss";

export default function CalcDisplay() {
	return (
		<input disabled className={s.display} value="342"/>
	);
 }



