import styles from './RepositoryList.module.css'
import { Card } from '@radix-ui/themes/components/card'
import { Box } from '@radix-ui/themes/components/box'
import { Text } from '@radix-ui/themes/components/text'
import { Avatar, Flex } from '@radix-ui/themes'
import gitLogo from '../../assets/gitrepository.svg'
import { Link } from 'react-router'
import RepositoryListShimmer from '../RepositoryListShimmer/RepositoryListShimmer'
import { RepositoryType } from '../../types/RepositoryType'
import { useTheme } from '../../hooks/useTheme'

interface RepositoryListProps {
    repositoryData: RepositoryType[]
    isLoading: boolean
}

const RepositoryList = ({
    repositoryData = [],
    isLoading,
}: RepositoryListProps) => {
    const { theme } = useTheme()
    if (isLoading) return <RepositoryListShimmer />
    return (
        <Flex
            gap='5'
            wrap='wrap'
            justify='center'
            p='5'
            className={styles.responsiveFlex}
        >
            {repositoryData.map((repository) => (
                <Link
                    key={repository.id}
                    to={`/repository/${repository.id}`}
                    className={styles.repositoryCard}
                >
                    <Box width='240px'>
                        <Card size='2'>
                            <Flex gap='3' align='center'>
                                <Avatar
                                    src={gitLogo}
                                    fallback='T'
                                    style={{
                                        filter:
                                            theme === 'dark'
                                                ? 'invert(1)'
                                                : 'none',
                                    }}
                                />
                            </Flex>
                            <Box minHeight='180px'>
                                <Text as='div' size='3' weight='bold' mt='2'>
                                    Repository Name:
                                </Text>
                                <Text as='div' size='3' color='gray'>
                                    {repository.name}
                                </Text>
                                {repository.description && (
                                    <>
                                        <Text
                                            as='div'
                                            size='3'
                                            weight='bold'
                                            mt='2'
                                        >
                                            Description:
                                        </Text>
                                        <Text
                                            as='span'
                                            size='2'
                                            className={styles.description}
                                            color='gray'
                                        >
                                            {repository.description}
                                        </Text>
                                    </>
                                )}
                            </Box>
                        </Card>
                    </Box>
                </Link>
            ))}
        </Flex>
    )
}

export default RepositoryList
