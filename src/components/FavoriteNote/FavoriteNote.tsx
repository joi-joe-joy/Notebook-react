import { useMutation } from '@apollo/client'
import React, { FC, memo, useState } from 'react'
import { TOGGLE_FAVORITE } from '../../gql/mutation'
import { GET_MY_FAVORITES } from '../../gql/query'
import { ButtonAsLink } from '../Button'
import { Count } from './FavoriteNote.styles'
import { FavoriteNoteProps } from './FavoriteNote.types'

export const FavoriteNote: FC<FavoriteNoteProps> = memo(
	({ me, noteId, favoriteCount }) => {
		const [count, setCount] = useState(favoriteCount)

		const [favorited, setFavorited] = useState(
			me.favorites.filter((note) => note.id === noteId).length > 0
		)

		const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
			variables: {
				id: noteId,
			},
			refetchQueries: [{ query: GET_MY_FAVORITES }],
		})

		const onRemoveFavorite = () => {
			toggleFavorite()
			setFavorited(false)
			setCount(count - 1)
		}

		const onAddFavorite = () => {
			toggleFavorite()
			setFavorited(true)
			setCount(count + 1)
		}

		return (
			<>
				{favorited ? (
					<ButtonAsLink onClick={onRemoveFavorite}>
						Remove Favorite
					</ButtonAsLink>
				) : (
					<ButtonAsLink onClick={onAddFavorite}>Add Favorite</ButtonAsLink>
				)}
				<Count>: {count}</Count>
			</>
		)
	}
)
