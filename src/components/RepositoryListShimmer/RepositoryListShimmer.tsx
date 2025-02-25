import styles from './RepositoryListShimmer.module.css'
import { Card } from '@radix-ui/themes/components/card'
import { Box } from '@radix-ui/themes/components/box'
import { Text } from '@radix-ui/themes/components/text'
import { Avatar, Flex } from '@radix-ui/themes'

const RepositoryListShimmer = () => {
    return (
        <Flex gap='5' wrap='wrap' justify='center' p='5'>
            {Array.from({ length: 18 }).map((_, index) => (
                <Box key={index} width='240px'>
                    <Card size='2'>
                        <Flex gap='3' align='center'>
                            <Avatar fallback='' className={styles.skeleton} />
                        </Flex>
                        <Box minHeight='180px'>
                            <Text
                                as='div'
                                size='3'
                                weight='bold'
                                mt='2'
                                className={styles.skeletonText}
                            >
                                &nbsp;
                            </Text>
                            <Text
                                as='div'
                                size='3'
                                className={styles.skeletonText}
                            >
                                &nbsp;
                            </Text>
                            <Text
                                as='div'
                                size='3'
                                weight='bold'
                                mt='2'
                                className={styles.skeletonText}
                            >
                                &nbsp;
                            </Text>
                            <Text
                                as='span'
                                size='2'
                                className={styles.skeletonText}
                            >
                                &nbsp;
                            </Text>
                        </Box>
                    </Card>
                </Box>
            ))}
        </Flex>
    )
}

export default RepositoryListShimmer
