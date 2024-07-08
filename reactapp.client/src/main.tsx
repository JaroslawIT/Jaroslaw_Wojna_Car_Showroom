import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

//import {
//    createBrowserRouter,
//    RouterProvider,
//} from "react-router-dom";
import { Nowe } from './kup/NowePage.tsx';
import { Uzywane } from './kup/UzywanePage.tsx';
import { Sprzedaj } from './sprzedaj/SprzedajPage.tsx';
import { Firma } from './finansowanie/FirmaPage.tsx';
import { Prywatnie } from './finansowanie/PrywatPage.tsx';
import { Kontakt } from './kontakt/KontaktPage.tsx';
import { Premium } from './premium/PremiumPage.tsx';
import { Zaloguj } from './zaloguj/ZalogujPage.tsx';
import { Layout } from './layout/Layout.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//const router = createBrowserRouter([
//    {
//        path: "/",
//        element: <App />,
//    },
//    {
//        path: "/nowe",
//        element: <Nowe />,
//    },
//    {
//        path: "/uzywane",
//        element: <Uzywane />,
//    },

//     {
//        path: "/sprzedaj",
//        element: <Sprzedaj />,
//     },

//     {
//        path: "/firma",
//        element: <Firma />,
//     },

//     {
//        path: "/prywatnie",
//        element: <Prywatnie />,
//     },
//
//     {
//        path: "/kontakt",
//        element: <Kontakt />,
//     },
//     {
//        path: "/premium",
//        element: <Premium />,
//     },
//     {
//        path: "/zaloguj",
//        element: <Zaloguj />,
//     },

    //]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
        <React.StrictMode>
            {/* <RouterProvider router={router} />*/}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<App />} />
                    </Route>
                    <Route path='/nowe' element={<Layout />}>
                        <Route index element={<Nowe />} />
                    </Route>
                    <Route path='/uzywane' element={<Layout />}>
                        <Route index element={<Uzywane />} />
                    </Route>                 
                    <Route path='/sprzedaj' element={<Layout />}>
                        <Route index element={<Sprzedaj />} />
                    </Route>
                    <Route path='/firma' element={<Layout />}>
                        <Route index element={<Firma />} />
                    </Route>
                    <Route path='/prywatnie' element={<Layout />}>
                        <Route index element={<Prywatnie />} />
                    </Route>
                    
                    <Route path='/kontakt' element={<Layout />}>
                        <Route index element={<Kontakt />} />
                    </Route>
                    <Route path='/premium' element={<Layout />}>
                        <Route index element={<Premium />} />
                    </Route>
                    <Route path='/zaloguj' element={<Layout />}>
                        <Route index element={<Zaloguj />} />
                </Route>
              
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )

