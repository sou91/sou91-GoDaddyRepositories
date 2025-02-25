import { createContext } from 'react'
import { RepositoryType } from '../types/RepositoryType'

interface RepositoryContextType {
    repositoryData: RepositoryType[]
    isLoading: boolean
}

const defaultValue: RepositoryContextType = {
    repositoryData: [],
    isLoading: false,
}

export const RepositoriesContext =
    createContext<RepositoryContextType>(defaultValue)
