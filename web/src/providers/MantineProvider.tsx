import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider as OGMantineProvider,
} from '@mantine/core'
import { PropsWithChildren, useState } from 'react'

const MantineProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<OGMantineProvider
				withGlobalStyles
				theme={{
					colorScheme,
					colors: {
						'ocean-blue': [
							'#7AD1DD',
							'#5FCCDB',
							'#44CADC',
							'#2AC9DE',
							'#1AC2D9',
							'#11B7CD',
							'#09ADC3',
							'#0E99AC',
							'#128797',
							'#147885',
						],
					},
				}}
			>
				{children}
			</OGMantineProvider>
		</ColorSchemeProvider>
	)
}

export default MantineProvider
