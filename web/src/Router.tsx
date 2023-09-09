import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RouteErrorBoundary from '@/components/RouteErrorBoundary'
import RootLayout from '@/layouts/Root.layout'
import IndexPage from '@/pages/Index.page'

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
		],
	},
])

const Router: React.FC = () => <RouterProvider router={router} />

export default Router
