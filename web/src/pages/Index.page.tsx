import { css } from '@emotion/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, Group, Stack, Text, TextInput } from '@mantine/core'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Panel } from 'reactflow'
import { z } from 'zod'

import { About } from '@/components/About'
import { KeywordInput } from '@/components/KeywordInput'
import { Map } from '@/components/Map'
import { Name } from '@/components/Name'
import { createMap } from '@/core/api'
import { CALCULUS_MAP } from '@/core/map-tree'

const formSchema = z.object({
	keywords: z.string().nonempty(),
})

const CreateNewMapPanel: React.FC = () => {
	const navigate = useNavigate()
	const createMutation = useMutation(
		['create', 'map'],
		async (data: z.infer<typeof formSchema>) => {
			const keywords = data.keywords.split(',').map(keyword => keyword.trim())
			const res = await createMap(keywords)
			return res
		},
	)

	const { register, handleSubmit, formState } = useForm<
		z.infer<typeof formSchema>
	>({
		mode: 'onChange',
		resolver: zodResolver(formSchema),
	})

	const onSubmit = handleSubmit(async data => {
		const res = await createMutation.mutateAsync(data)
		if (typeof res.key === 'string') navigate(`/map/${res.key}`)
	})

	return (
		<Card withBorder shadow="lg" w="90vw" maw={600}>
			<Stack>
				<Text size="xl" weight={700}>
					👋 Welcome to MapIt!
				</Text>
				<Text size="md">
					MapIt will help you understand your study materials better by creating
					a mind map of your keywords. We use metaphor's AI powered search to
					find you the best learning resources for each keyword, too!
				</Text>
				<Text size="lg" weight={700}>
					✨ Let's create a new map for you!
				</Text>
				<TextInput
					{...register('keywords')}
					placeholder="E.g. psychology, behavioral psychology, positive reinforcement"
					label="Please enter your keywords separated by commas:"
					size="md"
				/>
				<Button
					disabled={!formState.isValid}
					loading={formState.isSubmitting}
					onClick={onSubmit}
					size="sm"
					color="ocean-blue"
				>
					Create New Map
				</Button>
			</Stack>
		</Card>
	)
}

const IndexPage: React.FC = () => {
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
						<KeywordInput />
					</Group>
				</div>
				<div
					css={css`
						width: 100vw;
						height: 100vh;
					`}
				>
					<Map rootNode={CALCULUS_MAP}>
						<Panel position="bottom-center">
							<CreateNewMapPanel />
						</Panel>
					</Map>
				</div>
			</div>
		</>
	)
}

export default IndexPage
