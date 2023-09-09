import ReactFlow, {
	Background,
	BackgroundVariant,
	Controls,
	useNodesState,
} from 'reactflow'

import 'reactflow/dist/style.css'

export type MapProps = {}

export const Map: React.FC<MapProps> = () => {
	const [nodes, setNodes, onNodesChange] = useNodesState([
		{
			id: '1',
			data: { label: 'Node 1' },
			position: { x: 250, y: 500 },
			draggable: true,
		},
		{
			id: '2',
			data: { label: 'Node 2' },
			position: { x: 500, y: 700 },
			draggable: true,
		},
	])
	return (
		<ReactFlow snapGrid={[16, 16]} nodes={nodes} onNodesChange={onNodesChange}>
			<Controls showInteractive={false} />
			<Background variant={BackgroundVariant.Dots} gap={16} size={1} />
		</ReactFlow>
	)
}
