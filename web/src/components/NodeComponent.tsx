import { css } from '@emotion/react'
import React from 'react'
import { Handle, NodeProps, Position } from 'reactflow'

export const NodeComponent: React.FC<NodeProps> = ({ data }) => {
	return (
		<>
			<Handle type="target" position={Position.Top} />
			<div
				css={css`
					background: #fff;
					padding: 12px;
					border-top-right-radius: 8px;
					border-top-left-radius: 8px;
					border-bottom: solid 8px ${data.color ?? '#000'};
					box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
					font-size: 16px;
					font-weight: bold;
				`}
			>
				{data.label}
			</div>
			<Handle type="source" position={Position.Bottom} />
		</>
	)
}
