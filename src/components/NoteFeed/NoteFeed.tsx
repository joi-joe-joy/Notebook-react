import React, { FC } from 'react'
import { Note } from '../Note/Note'
import { NoteWrapper } from './NoteFeed.styles'
import { NoteFeedProps } from './NoteFeed.types'

export const NoteFeed: FC<NoteFeedProps> = ({ notes }) => {
	return (
		<div>
			{notes?.map((note) => (
				<NoteWrapper key={note.id}>
					<Note note={note} />
				</NoteWrapper>
			))}
		</div>
	)
}
