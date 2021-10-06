import { useQuery } from '@apollo/client'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { GET_ME } from '../../gql/query'
import { EDIT_NOTE } from '../../routing/routeNames.const'
import DeleteNote from '../DeleteNote/DeleteNote'
import { FavoriteNote } from '../FavoriteNote'
import { NoteUserProps } from './NoteUser.types'

export const NoteUser: FC<NoteUserProps> = ({ note }) => {
	const { loading, error, data } = useQuery(GET_ME)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error!</p>

	return (
		<>
			<FavoriteNote
				me={data.me}
				noteId={note.id}
				favoriteCount={note.favoriteCount}
			/>
			<br />
			{data.me.id === note.author.id && (
				<>
					<Link to={`/${EDIT_NOTE}/${note.id}`}>Edit</Link>{' '}
					<DeleteNote noteId={note.id} />
				</>
			)}
		</>
	)
}
