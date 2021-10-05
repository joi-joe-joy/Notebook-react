import { useQuery } from '@apollo/client'
import React, { FC } from 'react'
import { NoteFeed } from '../../components/NoteFeed/NoteFeed'
import { GET_NOTES } from './Home.const'
import { NoteFeedData, NoteFeedQuery } from './Home.types'

export const Home: FC = () => {
	const { data, loading, error, fetchMore } = useQuery<
		NoteFeedData,
		NoteFeedQuery
	>(GET_NOTES)

	if (loading) return <p>Loading...</p>

	if (error) return <p>Error!</p>

	return <NoteFeed notes={data?.noteFeed.notes} />
}
