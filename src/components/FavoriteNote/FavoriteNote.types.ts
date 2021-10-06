import { UserType } from '../../types/user.type'

export interface FavoriteNoteProps {
	me: UserType
	noteId: string
	favoriteCount: number
}
