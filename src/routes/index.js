import App from 'components/app'
import {HomePage, ProductsPage, NewsPage, ProductPage, ArticlePage} from 'components/pages';
import {NewsScreen} from "../components/screens";

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
				{
					component: ProductsPage,
					path: '/products',
					exact: true
				},
				{
					component: NewsPage,
					path: '/news',
					exact: true
				},
				{
					component: ProductPage,
					path: '/products/:productId',
					exact: true
				},
				{
					component: ArticlePage,
					path: '/news/:articleId',
					exact: true
				},
				NotFoundRoute
			]
		},
	]
}

export { GlobalAppRouter }
