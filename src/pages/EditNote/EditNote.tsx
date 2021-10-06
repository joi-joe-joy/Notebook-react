import { useMutation, useQuery } from '@apollo/client'
import React, { FC } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { NoteForm } from '../../components/NoteForm'
import { EDIT_NOTE } from '../../gql/mutation'
import { GET_ME, GET_NOTE } from '../../gql/query'
import { NOTE } from '../../routing/routeNames.const'
import { NoteData, NoteQuery } from '../NotePage/NotePage.types'

export const EditNote: FC = () => {
	const history = useHistory()
	const { id } = useParams<{ id: string }>()
	const { loading, error, data } = useQuery<NoteData, NoteQuery>(GET_NOTE, {
		variables: { id },
	})
	const { data: userdata } = useQuery(GET_ME)
	const [editNote] = useMutation(EDIT_NOTE, {
		variables: {
			id,
		},
		onCompleted: () => {
			history.push(`/${NOTE}/${id}`)
		},
	})

	if (loading) return <p>Loading...</p>

	if (error) return <p>Error! Note not found</p>

	if (userdata?.me.id !== data?.note.author.id) {
		return <p>You do not have access to edit this note</p>
	}

	return <NoteForm action={editNote} content={data?.note.content} />
}
