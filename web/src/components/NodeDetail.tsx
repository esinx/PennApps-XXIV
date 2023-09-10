import { Card, Paper } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import Metaphor from 'metaphor-node'

import { suspended } from '@/utils/suspended'

const metaphor = new Metaphor('709cef61-7992-46be-bdb8-33f961719364')

export type NodeDetailProps = {
	label: string
}

export const NodeDetail: React.FC<NodeDetailProps> = ({ label }) => {
	const query = useQuery(
		['node', label, 'detail'],
		async () => {
			const res = await metaphor.search(`Learning resources for ${label}`)
			return res.results
		},
		{
			suspense: true,
		},
	)

	const data = suspended(query.data)

	return (
		<Paper>
			{data.map(item => (
				<Card key={item.id}>
					<h3>{item.title}</h3>
					<a href={item.url}>{item.url}</a>
				</Card>
			))}
		</Paper>
	)
}
