import { useParams } from 'react-router'
import { useRepositoryData } from '../../hooks/useRepositoryData'
import { Text } from '@radix-ui/themes/components/text'
import { Heading } from '@radix-ui/themes/components/heading'
import { Box } from '@radix-ui/themes/components/box'
import { Skeleton } from '@radix-ui/themes/components/skeleton'
import { Link } from '@radix-ui/themes/components/link'

const RepositoryListItem = () => {
    const { repositoryId } = useParams()
    const { repositoryData, isLoading } = useRepositoryData()
    const selectedRepositoryData = repositoryData?.find(
        (repository) => repository.id === Number(repositoryId)
    )
    return (
        <Box p='5' data-testid='repository-details'>
            <Heading mb='2' size='4'>
                Repository Details :
            </Heading>
            <Text as='div' size='3' weight='bold' mt='2'>
                Title:
            </Text>
            <Text as='span' size='2' color='gray'>
                {isLoading ? (
                    <Skeleton width='200px' />
                ) : (
                    selectedRepositoryData?.name
                )}
            </Text>
            <Text as='div' size='3' weight='bold' mt='2'>
                Description:
            </Text>
            <Text as='span' size='2' color='gray'>
                {isLoading ? (
                    <Skeleton width='200px' />
                ) : (
                    selectedRepositoryData?.description
                )}
            </Text>
            <Text as='div' size='3' weight='bold' mt='2'>
                Languages:
            </Text>
            <Text as='span' size='2' color='gray'>
                {isLoading ? (
                    <Skeleton width='200px' />
                ) : (
                    selectedRepositoryData?.language
                )}
            </Text>
            <Text as='div' size='3' weight='bold' mt='2'>
                Open issues:
            </Text>
            <Text as='span' size='2' color='gray' mt='2'>
                {isLoading ? (
                    <Skeleton width='200px' />
                ) : (
                    selectedRepositoryData?.open_issues_count
                )}
            </Text>
            <Text as='div' size='3' weight='bold' mt='2'>
                Watchers:
            </Text>
            <Text as='div' size='2' color='gray' my='2'>
                {isLoading ? (
                    <Skeleton width='200px' />
                ) : (
                    selectedRepositoryData?.watchers_count
                )}
            </Text>
            <Link href={selectedRepositoryData?.svn_url}>Go to Repository</Link>
        </Box>
    )
}

export default RepositoryListItem
