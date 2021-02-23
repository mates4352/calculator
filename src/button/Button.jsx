import React from 'react';
import s from "./Button.module.scss";

export default function Button(props) {
  return (
	  <button className={s.button}>{props.value}</button>
  );
}

