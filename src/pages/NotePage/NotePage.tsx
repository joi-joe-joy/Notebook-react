import { useQuery } from '@apollo/client'
import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Note } from '../../components/Note'
import { GET_NOTE } from './NotePage.gql'
import { NoteData, NoteQuery } from './NotePage.types'

export const NotePage: FC = () => {
	const { id } = useParams<{ id: string }>()
	const { loading, error, data } = useQuery<NoteData, NoteQuery>(GET_NOTE, {
		variables: { id },
	})

	if (loading) return <p>Loading...</p>

	if (error) return <p>Error! Note not found</p>

	return <Note note={data?.note} />
}
