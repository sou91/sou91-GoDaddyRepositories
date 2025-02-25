import { createContext } from 'react'

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}
type ThemeContextType = {
    theme: Theme
    toggleTheme: (e: boolean) => void
}

const themeDefaultValue: ThemeContextType = {
    theme: Theme.LIGHT,
    toggleTheme: () => {},
}

export const ThemeContext = createContext(themeDefaultValue)
