import { useContext } from 'react'
import { RepositoriesContext } from '../context/RepositoriesContext'

export const useRepositoryData = () => useContext(RepositoriesContext)
