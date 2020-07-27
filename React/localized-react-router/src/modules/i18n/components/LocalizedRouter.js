import React from 'react'
import { BrowserRouter, Routes, Route, useParams, useLocation, useNavigate } from 'react-router-dom'

export function LocalizedRouter({ children }) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={
                        <RouteElement>
                            {children}
                        </RouteElement>
                    } />
                <Route path="/:lang"
                    element={
                        <RouteElement>
                            {children}
                        </RouteElement>
                    } />
            </Routes>
        </BrowserRouter>
    )
}

const RouteElement = ({ children }) => {
    const params = useParams()
    console.log(params)
    const location = useLocation()
    console.log(location)

    const navigate = useNavigate()
    const defaultLanguage = 'en'
    // sets default language given from localized router 
    // or takes one default one saved as const
    const { lang = defaultLanguage || defaultLanguage } = params

    // if lang is not in url redirects to it
    const { pathname } = location;
    if (!pathname.includes(`/${lang}`)) {
        console.log(`/${lang}`)
        navigate(`/${lang}`)
    }

    return (
        <>
            {children}
        </>
    )
}
