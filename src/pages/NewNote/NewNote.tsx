import { useMutation } from '@apollo/client'
import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router'
import { NoteForm } from '../../components/NoteForm'
import { NEW_NOTE } from '../../gql/mutation'
import { GET_MY_NOTES, GET_NOTES } from '../../gql/query'
import { NOTE } from '../../routing/routeNames.const'

export const NewNote: FC = () => {
	const history = useHistory()
	const [data, { loading, error }] = useMutation(NEW_NOTE, {
		refetchQueries: [{ query: GET_MY_NOTES }, { query: GET_NOTES }],
		onCompleted: (data) => {
			history.push(`${NOTE}/${data.newNote.id}`)
		},
	})

	useEffect(() => {
		document.title = 'New Note — Notebook'
	})

	return (
		<>
			{loading && <p>Loading...</p>}
			{error && <p>Error saving the note</p>}
			<NoteForm action={data} />
		</>
	)
}
