import { css } from '@emotion/react'
import { Group } from '@mantine/core'

import { About } from '@/components/About'
import { KeywordInput } from '@/components/KeywordInput'
import { Map } from '@/components/Map'
import { Name } from '@/components/Name'

const IndexPage: React.FC = () => {
	return (
		<div
			css={css`
				position: relative;
			`}
		>
			<div
				css={css`
					position: absolute;
					width: 100%;
					height: 100%;
					z-index: 100;
					pointer-events: none;
				`}
			>
				{/* Floating components go here */}
				<Group w="100%" position="apart" p={12}>
					<About />
					<Name />
					<KeywordInput />
				</Group>
			</div>
			<div
				css={css`
					width: 100vw;
					height: 100vh;
				`}
			>
				<Map />
			</div>
		</div>
	)
}

export default IndexPage
