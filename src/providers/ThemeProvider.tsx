import { useState } from 'react'
import { ThemeContext, Theme } from '../context/ThemeContext'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(
        (localStorage.getItem('theme') as Theme) || Theme.LIGHT
    )
    const toggleTheme = (e: boolean) => {
        const newTheme = e ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
