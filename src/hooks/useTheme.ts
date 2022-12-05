import { useContext } from "react"

import { ThemeContext } from 'Context/ThemeContext'

export const useTheme = () => useContext(ThemeContext)