import { Box, TextField } from '@radix-ui/themes/components/index'
import RepositoryList from './components/RepositoryList/RepositoryList'
import { useRepositoryData } from './hooks/useRepositoryData'
import styles from './App.module.css'
import { useState } from 'react'

const App = () => {
    const { repositoryData, isLoading } = useRepositoryData()
    const [searchTerm, setSearchTerm] = useState<string>('')

    const filteredRepositories = repositoryData.filter((repository) =>
        repository.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <>
            <Box pl='24px' p='5' className={styles.searchBox}>
                <TextField.Root
                    size='3'
                    placeholder='Search Repository'
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Box>
            <RepositoryList
                repositoryData={filteredRepositories}
                isLoading={isLoading}
            />
        </>
    )
}

export default App
