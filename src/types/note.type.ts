import { UserType } from './user.type'

export interface NoteType {
	id: string
	content: string
	author: UserType
	createdAt: Date
	updatedAt: Date
	favoriteCount: number
	favoritedBy: UserType[]
}
