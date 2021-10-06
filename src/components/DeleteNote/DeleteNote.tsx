import { useMutation } from '@apollo/client'
import React, { FC, memo } from 'react'
import { StaticContext } from 'react-router'
import { RouteComponentProps, useHistory, withRouter } from 'react-router-dom'
import { DELETE_NOTE } from '../../gql/mutation'
import { GET_MY_NOTES, GET_NOTES } from '../../gql/query'
import { ROUTE_NAMES } from '../../routing/routeNames.const'
import { ButtonAsLink } from '../Button'
import { DeleteNoteProps } from './DeleteNote.types'

const DeleteNote: FC<
	RouteComponentProps<any, StaticContext, unknown> & DeleteNoteProps
> = memo(({ noteId }) => {
	const history = useHistory()
	const [deleteNote] = useMutation(DELETE_NOTE, {
		variables: {
			id: noteId,
		},
		refetchQueries: [{ query: GET_MY_NOTES }, { query: GET_NOTES }],
		onCompleted: () => {
			history.push(ROUTE_NAMES.MY_NOTES)
		},
	})

	const onButtonClick = () => deleteNote()

	return <ButtonAsLink onClick={onButtonClick}>Delete</ButtonAsLink>
})

export default withRouter(DeleteNote)
