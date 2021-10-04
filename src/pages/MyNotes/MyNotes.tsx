import React, { FC, useEffect } from 'react'

export const MyNotes: FC = () => {
	useEffect(() => {
		document.title = 'My Notes — Notebook'
	})

	return (
		<div>
			<p>These are my notes</p>
		</div>
	)
}
