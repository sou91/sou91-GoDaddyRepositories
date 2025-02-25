import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { RepositoriesProvider } from './providers/RepositoriesProvider'
import { vi } from 'vitest'
import AppRoutes from './routes/routes'

const mockFetch = vi.fn()
global.fetch = mockFetch

// Mock repository data
const mockRepositories = [
    {
        id: '1',
        name: 'gdapi-php',
        description: 'test repository description 1',
    },
    {
        id: '2',
        name: 'lazy-social-buttons',
        description: 'test repository description 2',
    },
    {
        id: '3',
        name: 'gdapi-python',
        description: 'test repository description 3',
    },
]

describe('RepositoryList Component', () => {
    const ComponentUnderTest = () => {
        return (
            <MemoryRouter initialEntries={['/']}>
                <RepositoriesProvider>
                    <AppRoutes />
                </RepositoriesProvider>
            </MemoryRouter>
        )
    }
    afterEach(() => {
        vi.clearAllMocks()
        vi.restoreAllMocks()
    })

    test('filters repositories depending on search input', async () => {
        mockFetch.mockResolvedValue({
            json: vi.fn().mockResolvedValue(mockRepositories),
        })

        render(<ComponentUnderTest />)
        const searchInput = screen.getByPlaceholderText('Search Repository')
        expect(searchInput).toBeInTheDocument()
        await waitFor(() => {
            expect(screen.getByText('gdapi-php')).toBeInTheDocument()
        })
        await userEvent.type(searchInput, 'lazy')

        expect(screen.getByText('lazy-social-buttons')).toBeInTheDocument()
        expect(screen.queryAllByText('gdapi')).toHaveLength(0)
    })

    test('renders not found component for invalid url', () => {
        render(
            <MemoryRouter initialEntries={['/random-wrong-url']}>
                {' '}
                {/* Simulating wrong URL */}
                <RepositoriesProvider>
                    <AppRoutes />
                </RepositoriesProvider>
            </MemoryRouter>
        )
        expect(screen.getByText('Page Not Found!!!')).toBeInTheDocument()
    })
})
