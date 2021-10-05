import moment from 'moment'
import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { MetaData, MetaInfo, StyledNote, UserActions } from './Note.styles'
import { NoteProps } from './Note.types'

export const Note: FC<NoteProps> = ({ note }) => {
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
					{note.author.username} {moment(note.createdAt).format('MMM Do YYYY')}
				</MetaInfo>
				<UserActions>
					<em>Favorites:</em> {note.favoriteCount}
				</UserActions>
			</MetaData>
			<ReactMarkdown children={note.content} />
		</StyledNote>
	)
}
