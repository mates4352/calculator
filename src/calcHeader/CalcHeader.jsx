import React from 'react';
import s from './CalcHeader.module.scss';

export default function Calcheader() {
	return (
		<div className={s.header}>
			<div className={s.header__calc}><div className={s.header__line}></div></div>
			<div className={s.header__calc}><div className={s.header__block}></div></div>
			<div className={s.header__calc}>X</div>
		</div>
	);
 }



