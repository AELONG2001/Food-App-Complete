import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
	placeholder: string;
	control: Control<any>;
}

const useStyles = makeStyles({
	inputField: {
		'& .MuiOutlinedInput-root': {
			borderRadius: '30px !important',
			margin: '6px 0',
		},

		'& .MuiInputLabel-root': {
			fontSize: '1.4rem !important',
		},

		'& .MuiFormHelperText-root': {
			fontSize: '1.2rem !important',
			lineHeight: '1.4rem !important',
		},
	},
});

export default function InputField({
	name,
	label,
	placeholder,
	control,
	...inputProps
}: InputFieldProps) {
	const classes = useStyles();

	const {
		field: { value, onChange, onBlur, ref },
		fieldState: { invalid, error },
	} = useController({
		name,
		control,
	});
	return (
		<TextField
			className={classes.inputField}
			id={name}
			name={name}
			size="medium"
			value={value}
			label={label}
			placeholder={placeholder}
			onChange={onChange}
			onBlur={onBlur}
			inputRef={ref}
			error={invalid}
			helperText={error?.message}
			inputProps={inputProps}
			variant="outlined"
		/>
	);
}
