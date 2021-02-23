import React from 'react';
import Button from '../button/Button';
import s from "./CalcDispalay.module.scss";




export default function CalcButton() {
	return (
		<div className={s.CalcButtons}>
			<Button value={1}></Button>
			<Button value={2}></Button>
			<Button value={3}></Button>
			<Button value={4}></Button>
			<Button value={5}></Button>
			<Button value={6}></Button>
			<Button value={7}></Button>
			<Button value={8}></Button>
			<Button value={9}></Button>
			<Button value={0}></Button>
			<Button value={"Ce"}></Button>
			<Button value={"C"}></Button>
			<Button value={"Inv"}></Button>
			<Button value={"Rad"}></Button>
			<Button value={"Sin"}></Button>
			<Button value={"Cos"}></Button>
			<Button value={"Tan"}></Button>
			<Button value={"%"}></Button>
			<Button value={"In"}></Button>
			<Button value={"Log"}></Button>
			<Button value={"!"}></Button>
		</div>
	);
 }



