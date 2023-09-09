import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<main
			css={css`
				width: 100vw;
				min-height: 100vh;

				margin: 0 auto;
			`}
		>
			{children}
			<Outlet />
		</main>
	)
}

export default RootLayout
