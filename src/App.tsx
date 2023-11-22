import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import { Outlet, RootRoute, Route } from '@tanstack/react-router'

export const rootRoute = new RootRoute({
    component: App,
})

const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
})

const loginRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: Login,
})

const signupRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/signup',
    component: Signup,
})

const notFoundRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/*',
    component: NotFound,
})

export const routeTree = rootRoute.addChildren([
    indexRoute,
    loginRoute,
    signupRoute,
    notFoundRoute
])

function App() {
  return (
    <>
        <Header/>
        <Outlet />
    </>
  )
}
