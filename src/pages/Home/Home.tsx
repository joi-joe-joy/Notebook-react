import { useQuery } from '@apollo/client'
import React, { FC } from 'react'
import { Button } from '../../components/Button'
import { NoteFeed } from '../../components/NoteFeed/NoteFeed'
import { GET_NOTES } from '../../gql/query'
import { ButtonWrap } from './Home.styles'
import { NoteFeedData, NoteFeedQuery } from './Home.types'

export const Home: FC = () => {
	const { data, loading, error, fetchMore } = useQuery<
		NoteFeedData,
		NoteFeedQuery
	>(GET_NOTES)

	if (loading) return <p>Loading...</p>

	if (error) return <p>Error!</p>

	const handleFetch = () => {
		fetchMore({
			variables: {
				cursor: data?.noteFeed.cursor,
			},
			updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
				return fetchMoreResult
					? {
							noteFeed: {
								cursor: fetchMoreResult.noteFeed.cursor,
								hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
								notes: [
									...previousResult.noteFeed.notes,
									...fetchMoreResult.noteFeed.notes,
								],
								__typename: 'noteFeed',
							},
					  }
					: previousResult
			},
		})
	}

	return (
		<>
			<NoteFeed notes={data?.noteFeed.notes} />
			{data?.noteFeed.hasNextPage && (
				<ButtonWrap>
					<Button onClick={handleFetch}>Load more</Button>
				</ButtonWrap>
			)}
		</>
	)
}
