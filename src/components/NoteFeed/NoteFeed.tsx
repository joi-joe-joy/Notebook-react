import React, { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { NOTE } from '../../routing/routeNames.const'
import { Note } from '../Note/Note'
import { NoteWrapper } from './NoteFeed.styles'
import { NoteFeedProps } from './NoteFeed.types'

export const NoteFeed: FC<NoteFeedProps> = memo(({ notes }) => {
	return (
		<div>
			{notes?.map((note) => (
				<NoteWrapper key={note.id}>
					<Note note={note} />
					<Link to={`${NOTE}/${note.id}`}>Permalink</Link>
				</NoteWrapper>
			))}
		</div>
	)
})
