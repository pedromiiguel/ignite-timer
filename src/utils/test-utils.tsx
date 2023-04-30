/* eslint-disable import/export */
import React, { ReactElement } from 'react'
import { RenderOptions, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from '../context/cycleContext'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <CyclesContextProvider>
        <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
      </CyclesContextProvider>
    </BrowserRouter>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
