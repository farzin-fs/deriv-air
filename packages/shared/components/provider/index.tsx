import { DripsyProvider } from 'dripsy'
import React from 'react'
import { useColorScheme } from 'react-native'
import { darkTheme } from '../themes/dark'
import { lightTheme } from '../themes/light'

type TProps = {
  children: React.ReactNode
}

export function Provider({ children }: TProps) {
  const colorMode = useColorScheme()

  return (
    <DripsyProvider
      theme={colorMode === 'dark' ? darkTheme : lightTheme}
      // this disables SSR, since react-native-web doesn't have support for it (yet)
      ssr
    >
      {children}
    </DripsyProvider>
  )
}
