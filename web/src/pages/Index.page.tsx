import { css } from '@emotion/react'
import { Button, Group, Modal, Text, Title, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'

import { About } from '@/components/About'
import { KeywordInput } from '@/components/KeywordInput'
import { Map } from '@/components/Map'
import { Name } from '@/components/Name'

const IndexPage: React.FC = () => {
	
	const [opened, { open, close }] = useDisclosure(false);
	const [openNodeLabel, setOpenNodeLabel] = useState<string>();
	const theme = useMantineTheme();

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
				{/* <SplashScreen /> */}
				{/* Floating components go here */}
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
				<Map onNodeClick={(name) => {

					setOpenNodeLabel(name)
					open()
				}}/>

			</div>
		</div>
		<Modal 
		opened={opened} 
		onClose={close} 
		title={<h3>{openNodeLabel}</h3>}
		centered
		overlayProps={{
		color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
		opacity: 0.25,
		blur: 2,
		}}
		transitionProps={{ transition: 'fade', duration: 200 }}
		>
			<Title order={5}>Description: <Text fw={300} pb='sm'>description from api here</Text></Title>
			<Button onClick={() => {
            console.log("test")
        	}}>
				<Text>
					Read more here!
				</Text>
			</Button>
		</Modal>
		</>
	)
}

export default IndexPage
