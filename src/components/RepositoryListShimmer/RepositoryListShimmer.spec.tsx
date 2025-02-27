import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router'
import { RepositoriesProvider } from '../../providers/RepositoriesProvider'
import { vi } from 'vitest'
import AppRoutes from '../../routes/routes'

const mockFetch = vi.fn()
global.fetch = mockFetch

// Mock repository data
const mockRepositories = [
    {
        id: '1',
        name: 'Test Repo 1',
        description: 'test repository description 1',
    },
    {
        id: '2',
        name: 'Test Repo 2',
        description: 'test repository description 2',
    },
]

describe('RepositoryList Component', () => {
    const ComponentUnderTest = () => (
        <BrowserRouter>
            <RepositoriesProvider>
                <AppRoutes />
            </RepositoriesProvider>
        </BrowserRouter>
    )
    afterEach(() => {
        vi.clearAllMocks()
        vi.restoreAllMocks()
    })

    test('renders loading state when isLoading is true', async () => {
        // Mock fetch to resolve the repositories after a delay
        mockFetch.mockResolvedValue({
            json: vi.fn().mockResolvedValue(mockRepositories),
        })

        render(<ComponentUnderTest />)

        // Check if shimmer component is displayed during loading
        expect(screen.getByTestId('shimmer-list')).toBeInTheDocument()

        // Wait for the loading state to end and verify that the repositories are rendered
        await waitFor(() => screen.getByText('Test Repo 1'))
        await waitFor(() => screen.getByText('Test Repo 2'))

        // Ensure that the loading state is replaced by the repository list after fetch
        expect(screen.queryByTestId('shimmer-list')).not.toBeInTheDocument()
    })
})
