import React, { FC, useEffect } from 'react'

export const Favorites: FC = () => {
	useEffect(() => {
		document.title = 'Favorites — Notebook'
	})

	return (
		<div>
			<p>These are my favorites</p>
		</div>
	)
}
