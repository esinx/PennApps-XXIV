import { Card, Paper, Stack, Text } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { Result } from 'metaphor-node'

import { suspended } from '@/utils/suspended'

export type NodeDetailProps = {
	label: string
}

export const NodeDetail: React.FC<NodeDetailProps> = ({ label }) => {
	const query = useQuery(
		['node', label, 'detail'],
		async () => {
			const res = await fetch(
				'https://vghxth7utf.execute-api.us-east-2.amazonaws.com/default/',
				{
					headers: {
						'x-api-key': '709cef61-7992-46be-bdb8-33f961719364',
					},
					method: 'POST',
					body: JSON.stringify({
						query: `Learning resources for ${label}`,
					}),
				},
			)
			const data = await res.json()
			return data.results
		},
		{
			suspense: true,
		},
	)

	const data = suspended(query.data)

	return (
		<Paper>
			<Stack>
				{data.map((item: Result) => (
					<Card key={item.id} withBorder>
						<Text weight={700}>{item.title}</Text>
						<a href={item.url}>{item.url}</a>
					</Card>
				))}
			</Stack>
		</Paper>
	)
}
