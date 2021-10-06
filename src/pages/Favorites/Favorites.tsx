import { useQuery } from '@apollo/client'
import React, { FC, useEffect } from 'react'
import { NoteFeed } from '../../components/NoteFeed'
import { GET_MY_FAVORITES } from '../../gql/query'

export const Favorites: FC = () => {
	useEffect(() => {
		document.title = 'Favorites — Notebook'
	})

	const { loading, error, data } = useQuery(GET_MY_FAVORITES)

	if (loading) return <p>Loading...</p>
	if (error) return <p>{`Error! ${error.message}`}</p>

	if (data.me.favorites.length) {
		return <NoteFeed notes={data.me.favorites} />
	} else {
		return <p>No favorites yet</p>
	}
}
