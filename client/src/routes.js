import Admin from "./pages/admin"
import Auth from "./pages/auth"
import CreateData from "./pages/create_data"
import Data from "./pages/data"
import Registartion from "./pages/registration"
import { ADD_DATA_ROUTE, ADMIN_ROUTE, DATA_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MARK } from "./utils/consts"

export const authRoutes =[

   
]

export const publicRoutes =[
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: DATA_ROUTE,
        Component: Data
    },
    {
        path: ADD_DATA_ROUTE,
        Component: CreateData
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registartion
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }

    
]