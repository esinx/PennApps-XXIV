import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RouteErrorBoundary from '@/components/RouteErrorBoundary'
import RootLayout from '@/layouts/Root.layout'
import IndexPage from '@/pages/Index.page'
import MapPage from '@/pages/Map.page'

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <RouteErrorBoundary />,
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <IndexPage />,
			},
			{
				path: '/map/:id',
				element: <MapPage />,
			},
		],
	},
])

const Router: React.FC = () => <RouterProvider router={router} />

export default Router
