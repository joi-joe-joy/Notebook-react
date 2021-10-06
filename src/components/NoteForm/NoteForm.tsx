import React, { FC, FormEvent, memo, useState } from 'react'
import { Button } from '../Button'
import { Form, TextArea, Wrapper } from './NoteForm.styles'
import { NoteFormProps } from './NoteForm.types'

export const NoteForm: FC<NoteFormProps> = memo(({ content = '', action }) => {
	const [values, setValues] = useState({ content: content || '' })

	const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		})
	}

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		action({
			variables: {
				...values,
			},
		})
	}

	return (
		<Wrapper>
			<Form onSubmit={onSubmit}>
				<TextArea
					required
					name="content"
					placeholder="Note content"
					value={values.content}
					onChange={onChange}
				/>
				<Button type="submit">Save</Button>
			</Form>
		</Wrapper>
	)
})
