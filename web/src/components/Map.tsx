import ReactFlow, { Background, BackgroundVariant, Controls } from 'reactflow'

import 'reactflow/dist/style.css'

export type MapProps = {}

export const Map: React.FC<MapProps> = () => {
	return (
		<ReactFlow
			snapToGrid
			snapGrid={[16, 16]}
			nodes={[
				{
					id: '1',
					data: { label: 'Node 1' },
					position: { x: 250, y: 500 },
				},
				{
					id: '2',
					data: { label: 'Node 2' },
					position: { x: 500, y: 700 },
				},
			]}
		>
			<Controls showInteractive={false} />
			<Background variant={BackgroundVariant.Dots} gap={16} size={1} />
		</ReactFlow>
	)
}
