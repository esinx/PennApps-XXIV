import { Code, Stack, Text, Title } from '@mantine/core'
import { useRouteError } from 'react-router-dom'

import RootLayout from '@/layouts/Root.layout'

const RouteErrorBoundary: React.FC = () => {
	const error = useRouteError()
	return (
		<RootLayout>
			<Stack>
				<Title size={32} weight="bold">
					Error
				</Title>
				<Code block>
					{(() => {
						if (error instanceof Error) {
							return (
								<>
									<Text weight="bold">
										{error.name}: {error.message}
									</Text>
									<Text size={12}>{error.stack}</Text>
								</>
							)
						}
						return JSON.stringify(error, null, 2)
					})()}
				</Code>
			</Stack>
		</RootLayout>
	)
}

export default RouteErrorBoundary
