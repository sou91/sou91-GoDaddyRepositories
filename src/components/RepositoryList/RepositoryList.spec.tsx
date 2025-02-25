import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
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

    test('renders repository list correctly', async () => {
        mockFetch.mockResolvedValue({
            json: vi.fn().mockResolvedValue(mockRepositories),
        })

        render(<ComponentUnderTest />)
        // Check if repositories are rendered
        await waitFor(() => {
            const elements = screen.getAllByText('Repository Name:')
            expect(elements).toHaveLength(2)
        })
        expect(screen.getByText('Test Repo 1')).toBeInTheDocument()
        expect(screen.getByText('Test Repo 2')).toBeInTheDocument()

        // Check if descriptions are displayed
        expect(
            screen.getByText('test repository description 1')
        ).toBeInTheDocument()
        expect(
            screen.getByText('test repository description 2')
        ).toBeInTheDocument()
    })

    test('redirects to repository detail page on card click', async () => {
        mockFetch.mockResolvedValue({
            json: vi.fn().mockResolvedValue(mockRepositories),
        })

        render(<ComponentUnderTest />)
        // Check if repositories are rendered

        await waitFor(() => {
            const elements = screen.getAllByText('Repository Name:')
            expect(elements).toHaveLength(2)
        })
        const user = userEvent.setup()
        const repoCard = screen.getByText('Test Repo 1')
        await user.click(repoCard)
        await waitFor(() => {
            expect(screen.getByTestId('repository-details')).toBeInTheDocument()
        })
    })
})
