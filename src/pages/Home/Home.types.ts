import { NoteType } from '../../types/note.type'

export interface NoteFeedProps {
	cursor: string
	hasNextPage: boolean
	notes: NoteType[]
}

export interface NoteFeedData {
	noteFeed: NoteFeedProps
}

export interface NoteFeedQuery {
	cursor: string
}
