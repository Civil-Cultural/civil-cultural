import { useState, useRef, useEffect } from 'react'

import { useTheme } from 'Hooks/useTheme'
import { ThemeStyle } from 'Styles/theme'

import {
  SwitchContainer,
  Span,
  FlexSwitch,
  InputCheck,
  StateSwitch,
  ContainerMoon,
  ContainerSun
} from "Components/Header/styles";


export function Switch() {
  const { theme, toggleTheme } = useTheme()
  const switchRef = useRef<HTMLInputElement>(null)
  const [isDark, setIsDark] = useState(false)
  
  useEffect(() => setIsDark(theme.type === 'dark'), [])

  const alternateTheme = () => {
    if (switchRef.current) {
      let checked = switchRef.current.checked && theme.type == 'light'
      setIsDark(checked)
      toggleTheme(checked ? 'DARK' : 'LIGHT')
    }
  }

  return (
    <SwitchContainer onClick={alternateTheme}>
        <InputCheck ref={switchRef} defaultChecked={isDark}/>
        <FlexSwitch>
          <ContainerMoon>
              <Span>🌜</Span>
          </ContainerMoon>
          <ContainerSun>
            <Span>🌞</Span>
          </ContainerSun>
        </FlexSwitch>
        <StateSwitch className={isDark  ? 'active-switch' : 'desative-switch'} />
    </SwitchContainer>
  )
}