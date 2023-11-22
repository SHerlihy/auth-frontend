import ReactDOM from 'react-dom/client'
import './index.css'
import { AuthProvider } from './context/AuthContext.tsx'
import axios from 'axios'
import { Router, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './App.tsx'

axios.defaults.baseURL = import.meta.env.VITE_AUTH_BACKEND_URL
axios.defaults.withCredentials = true

const router = new Router({
    routeTree: routeTree
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    )
}
