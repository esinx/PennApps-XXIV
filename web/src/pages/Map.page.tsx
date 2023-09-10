import { css } from '@emotion/react'
import {
	Center,
	Group,
	Loader,
	LoadingOverlay,
	Modal,
	Stack,
	Text,
	useMantineTheme,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Suspense, useState } from 'react'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { About } from '@/components/About'
import { KeywordInput } from '@/components/KeywordInput'
import { Map } from '@/components/Map'
import { Name } from '@/components/Name'
import { NodeDetail } from '@/components/NodeDetail'
import { readMap, updateMap } from '@/core/api'
import { MapNode } from '@/core/map-tree'
import { suspended } from '@/utils/suspended'

const giveUUID = (node: MapNode): MapNode => {
	const id = uuidv4()
	return {
		...node,
		children: node.children?.map(giveUUID),
		id,
	}
}

const MapPage: React.FC = () => {
	const { id } = useParams()
	const [opened, { open, close }] = useDisclosure(false)
	const [openNodeLabel, setOpenNodeLabel] = useState<string>()
	const [openNodeDescription, setOpenNodeDescription] = useState<string>()
	const theme = useMantineTheme()

	if (!id) throw new Error('No id provided')

	const query = useQuery(
		['map', id],
		async () => {
			const res = await readMap(id!)
			return {
				...res,
				output: giveUUID(res.output),
			}
		},
		{
			suspense: true,
		},
	)

	const updateMutation = useMutation(
		['update', 'map', id],
		async (keywords: string[]) => {
			const res = await updateMap(id!, keywords)
			return res
		},
	)

	const data = suspended(query.data)

	return (
		<>
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
					<Group w="100%" position="apart" p={12}>
						<About />
						<Name />
						<KeywordInput
							onSubmit={async keywords => {
								const res = await updateMutation.mutateAsync(keywords)
								if (res) {
									query.refetch()
									// location.reload()
								}
							}}
						/>
					</Group>
				</div>
				<div
					css={css`
						width: 100vw;
						height: 100vh;
					`}
				>
					<LoadingOverlay visible={updateMutation.isLoading} />
					<Map
						key={query.dataUpdatedAt}
						rootNode={data.output}
						onNodeClick={(label, description) => {
							console.log(label, description)
							setOpenNodeLabel(label)
							setOpenNodeDescription(description)
							open()
						}}
					/>
				</div>
			</div>
			<Modal
				opened={opened}
				onClose={close}
				title={<h3>{openNodeLabel}</h3>}
				centered
				overlayProps={{
					color:
						theme.colorScheme === 'dark'
							? theme.colors.dark[9]
							: theme.colors.gray[2],
					opacity: 0.25,
					blur: 2,
				}}
				transitionProps={{ transition: 'fade', duration: 200 }}
			>
				<Stack>
					<Text>{openNodeDescription}</Text>

					{
						<Suspense
							fallback={
								<Center>
									<Loader />
								</Center>
							}
						>
							{openNodeLabel && <NodeDetail label={openNodeLabel} />}
						</Suspense>
					}
				</Stack>
			</Modal>
		</>
	)
}

export default MapPage
