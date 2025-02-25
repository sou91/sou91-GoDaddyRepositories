import styles from './Header.module.css'
import switchStyles from './Switch.module.css'
import goDaddyLogo from '../../assets/goDaddyLogo.svg'
import { Switch } from 'radix-ui'
import { Flex, Box } from '@radix-ui/themes'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router'
import { useTheme } from '../../hooks/useTheme'

const Header = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <header className={styles.header}>
            <Flex align='center' px='5' className={styles.flexContainer}>
                <Link to={'./'} className={styles.left}>
                    <figure aria-label='GoDaddy'>
                        <img
                            src={goDaddyLogo}
                            alt='GoDaddy logo'
                            width='200px'
                        />
                    </figure>
                </Link>
                <h1 className={styles.center}>Repository List</h1>
                <Box className={styles.right}>
                    <SunIcon width='25' height='21' />
                    <Switch.Root
                        className={switchStyles.Root}
                        onCheckedChange={(e) => toggleTheme(e)}
                        checked={theme === 'dark'}
                    >
                        <Switch.Thumb className={switchStyles.Thumb} />
                    </Switch.Root>
                    <MoonIcon width='25' height='21' />
                </Box>
            </Flex>
        </header>
    )
}

export default Header
