import { css } from '@emotion/react'
import { Card, Group, Text } from '@mantine/core'

import { Map } from '@/components/Map'

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
					z-index: 1000;
				`}
			>
				{/* Floating components go here */}
				<Group w="100%" position="center" p={12}>
					<Card withBorder shadow="lg">
						<Text>Website</Text>
					</Card>
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
