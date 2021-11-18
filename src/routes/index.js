import App from 'components/app'
import { HomePage } from 'components/pages';

const NotFoundRoute = {
	path: '*',
	component: null,
}

const GlobalAppRouter = {
	routes: [
		{
			path: '/',
			component: App,
			routes: [
				{
					component: HomePage,
					path: '/home',
					exact: true
				},
				NotFoundRoute
			]
		},
	]
}

export { GlobalAppRouter }
