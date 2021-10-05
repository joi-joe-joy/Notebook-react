import { NoteType } from './note.type'

export interface UserType {
	id: string
	username: string
	email: string
	avatar: string
	notes: NoteType[]
	favorites: NoteType[]
}
