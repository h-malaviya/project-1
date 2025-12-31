import '../styles/global.scss'
import '../styles/theme.scss'
import Home from '../features/home/pages/Home'
import NavBar from '../shared/compoents/NavBar'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './ThemeContext'
import InfoCard from '../shared/compoents/InfoCard'
function App() {


    return (
        <ThemeProvider>
            <BrowserRouter>
                <InfoCard />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
