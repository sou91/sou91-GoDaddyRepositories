import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router'
import App from '../../App'
import { RepositoriesProvider } from '../../providers/RepositoriesProvider'
import { vi } from 'vitest'

const mockFetch = vi.fn()
global.fetch = mockFetch

// Mock the shimmer component
vi.mock('../RepositoryListShimmer/RepositoryListShimmer', () => ({
    default: () => <div data-testid='shimmer' />,
}))

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
    const ComponentUnderTest = () => {
        return (
            <BrowserRouter>
                <RepositoriesProvider>
                    <App />
                </RepositoriesProvider>
            </BrowserRouter>
        )
    }
    afterEach(() => {
        vi.clearAllMocks()
        vi.restoreAllMocks()
    })
    test('renders loading state when isLoading is true', () => {
        mockFetch.mockResolvedValue({
            json: vi.fn().mockResolvedValue(mockRepositories),
        })
        render(<ComponentUnderTest />)

        // Ensure shimmer component is displayed
        expect(screen.getByTestId('shimmer')).toBeInTheDocument()
    })
})
