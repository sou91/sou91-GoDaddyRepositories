import { useEffect, useState } from 'react'
import { RepositoriesContext } from '../context/RepositoriesContext'
import { RepositoryType } from '../types/RepositoryType'

export const RepositoriesProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [repositoryData, setRepositoryData] = useState<RepositoryType[]>([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        fetchRepos()
    }, [])

    const fetchRepos = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(
                'https://api.github.com/orgs/godaddy/repos'
            )
            const repositoryData = await response?.json()
            setRepositoryData(repositoryData)
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <RepositoriesContext.Provider
            value={{
                repositoryData,
                isLoading,
            }}
        >
            {children}
        </RepositoriesContext.Provider>
    )
}
