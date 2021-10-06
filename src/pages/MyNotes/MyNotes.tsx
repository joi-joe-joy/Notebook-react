import { useQuery } from '@apollo/client'
import React, { FC, useEffect } from 'react'
import { NoteFeed } from '../../components/NoteFeed'
import { GET_MY_NOTES } from '../../gql/query'

export const MyNotes: FC = () => {
	useEffect(() => {
		document.title = 'My Notes — Notebook'
	})

	const { loading, error, data } = useQuery(GET_MY_NOTES)

	if (loading) return <p>Loading...</p>
	if (error) return <p>{`Error! ${error.message}`}</p>

	if (data.me.notes.length) {
		return <NoteFeed notes={data.me.notes} />
	} else {
		return <p>No notes yet</p>
	}
}
