import './assets/App.css'

import { BrowserRouter } from 'react-router-dom'
import GlobalProvider from './context/GlobalContext'
import Navbar from './components/Navbar'
import Router from './router/Router'

function App() {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <Navbar />
                <Router />
            </BrowserRouter>
        </GlobalProvider>
    )
}

export default App
