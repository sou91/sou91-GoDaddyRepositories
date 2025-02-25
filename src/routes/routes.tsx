import { Routes, Route } from 'react-router'
import App from '../App'
import RepositoryListItem from '../components/RepositoryListItem/RepositoryListItem'
import NotFound from '../components/NotFound/NotFound' // Optional 404 page

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route
                path='/repository/:repositoryId'
                element={<RepositoryListItem />}
            />
            <Route path='*' element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
    )
}

export default AppRoutes
