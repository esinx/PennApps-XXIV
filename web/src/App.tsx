import { Notifications } from '@mantine/notifications'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactFlowProvider } from 'reactflow'

import RootSuspense from '@/components/RootSuspense'
import useSingleton from '@/hooks/singleton'
import MantineProvider from '@/providers/MantineProvider'
import MultiProvider from '@/providers/MultiProvider'
import Router from '@/Router'

const App: React.FC = () => {
	const queryClient = useSingleton(() => new QueryClient())
	return (
		<MultiProvider
			providers={[
				<MantineProvider />,
				<QueryClientProvider client={queryClient} />,
				<RootSuspense />,
				<ReactFlowProvider />,
			]}
		>
			<Router />
			<Notifications position="bottom-center" />
		</MultiProvider>
	)
}

export default App
