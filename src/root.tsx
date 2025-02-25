import { Theme } from '@radix-ui/themes'
import { RepositoriesProvider } from './providers/RepositoriesProvider.tsx'
import Header from './components/Header/Header.tsx'
import AppRoutes from './routes/routes'
import { useTheme } from './hooks/useTheme.tsx'

const Root = () => {
    const { theme } = useTheme()
    return (
        <Theme appearance={theme} accentColor='purple' grayColor='sand'>
            <Header />
            <RepositoriesProvider>
                <AppRoutes />
            </RepositoriesProvider>
        </Theme>
    )
}

export default Root
