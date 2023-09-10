import { css } from '@emotion/react'
import {
	Button,
	Group,
	Modal,
	Paper,
	Stack,
	TextInput,
	useMantineTheme,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'

export const KeywordInput: React.FC<{
	onSubmit?: (keywords: string[]) => void
}> = ({ onSubmit }) => {
	const [value, setValue] = useState('')
	const [opened, { open, close }] = useDisclosure(false)
	const theme = useMantineTheme()

	const handleAddKeywords = () => {
		onSubmit?.(value.split(',').map(keyword => keyword.trim()))
		setValue('')
		close()
	}

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				title={<h3>Add Keywords Here!</h3>}
				radius={'md'}
				size="auto"
				overlayProps={{
					color:
						theme.colorScheme === 'dark'
							? theme.colors.dark[9]
							: theme.colors.gray[2],
					opacity: 0.55,
					blur: 3,
				}}
				transitionProps={{ transition: 'fade', duration: 600 }}
			>
				<Paper style={{ width: 580 }}>
					<Stack>
						<TextInput
							placeholder="E.g. psychology, behavioral psychology, positive reinforcement"
							label="Please enter your keywords separated by commas:"
							value={value}
							onChange={event => setValue(event.currentTarget.value)}
							size="md"
						/>
						<Button onClick={handleAddKeywords} size="sm" color="ocean-blue">
							Submit
						</Button>
					</Stack>
				</Paper>
			</Modal>
			<Group
				position="right"
				css={css`
					pointer-events: auto;
				`}
			>
				<Button
					onClick={() => {
						open()
					}}
					color="ocean-blue"
				>
					Add Keywords
				</Button>
			</Group>
		</>
	)
}
