import {ChangeEvent} from "react";

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (el: string)=>void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (el:ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(el.currentTarget.value)
		// НУЖНО ДОПИСАТЬ
	};

	return (
	  <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
//
//
// type InputPropsType = {
// 	currentText: any // НУЖНО ПРОТИПИЗИРОВАТЬ
// 	setCurrentText: any // НУЖНО ПРОТИПИЗИРОВАТЬ
// };
//
// export const Input = (props: InputPropsType) => {
// 	const onChangeHandler = (event: 'НУЖНО ПРОТИПИЗИРОВАТЬ') => {
// 		// НУЖНО ДОПИСАТЬ
// 	};
//
// 	return (
// 		<input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
// 	);
// };
