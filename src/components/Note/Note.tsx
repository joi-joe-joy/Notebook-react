import { useQuery } from '@apollo/client'
import moment from 'moment'
import React, { FC, memo } from 'react'
import ReactMarkdown from 'react-markdown'
import { IS_LOGGED_IN } from '../../gql/query'
import { NoteUser } from '../NoteUser'
import { MetaData, MetaInfo, StyledNote, UserActions } from './Note.styles'
import { NoteProps } from './Note.types'

export const Note: FC<NoteProps> = memo(({ note }) => {
	if (!note) return <></>

	const { loading, error, data } = useQuery(IS_LOGGED_IN)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error!</p>

	return (
		<StyledNote>
			<MetaData>
				<MetaInfo>
					<img
						src={note.author.avatar}
						alt={`${note.author.username} avatar`}
						height="50px"
					/>
				</MetaInfo>
				<MetaInfo>
					{note.author.username}
					<br /> {moment(note.createdAt).format('MMM Do YYYY')}
				</MetaInfo>
				{data.isLoggedIn ? (
					<UserActions>
						<NoteUser note={note} />
					</UserActions>
				) : (
					<UserActions>
						<em>Favorites:</em> {note.favoriteCount}
					</UserActions>
				)}
			</MetaData>
			<ReactMarkdown children={note.content} />
		</StyledNote>
	)
})
