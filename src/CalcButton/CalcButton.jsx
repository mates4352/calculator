import React from 'react';
import Button from '../button/Button';
import s from "./CalcButton.module.scss";
import d  from "../button/Button.module.scss"


export default function CalcButton() {

	function click() {
		console.log("hello");
	}
	
	return (
		<div className={s.CalcButtons}>
			<Button click={click} className={`${d.button} + ${d.button__calcOperationsAdd}`} value={"CE"}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperationsAdd}`} value={"C"}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperationsAdd}`} value={"close"}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperationsAdd}`} value={"C"}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperations}`} value={"Inv"}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperations}`} value={"Rad"}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperations}`} value={"Sin"}></Button>

			<Button click={click} className={d.button} value={7}></Button>
			<Button click={click} className={d.button} value={8}></Button>
			<Button click={click} className={d.button} value={9}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperationsAdd}`} value={'X'}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperations}`} value={"Cos"}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperations}`} value={"Tan"}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperations}`} value={"%"}></Button>

			<Button click={click} className={d.button} value={4}></Button>
			<Button click={click} className={d.button} value={5}></Button>
			<Button click={click} className={d.button} value={6}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperationsAdd}`} value={'-'}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperations}`} value={"In"}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperations}`} value={"Log"}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperations}`} value={"!"}></Button>

			<Button click={click} className={d.button} value={1}></Button>
			<Button click={click} className={d.button} value={2}></Button>
			<Button click={click} className={d.button} value={3}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperationsAdd}`} value={'+'}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperations}`} value={'^'}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperations}`} value={'П'}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperations}`} value={'e'}></Button>

			<Button click={click} className={`${d.button} + ${d.button__calcOperations}`} value={'.'}></Button>
			<Button click={click} className={d.button} value={0}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calc} + ${d.button__calcOperationsAdd}`} value={'='}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperations}`} value={'('}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperations}`} value={')'}></Button>
			<Button click={click} className={`${d.button} + ${d.button__calcOperations}`} value={0}></Button>
		 
		</div>
	);
 }



