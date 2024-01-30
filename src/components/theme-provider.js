"use client"
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

 
/**
 * 
 * @param {ThemeProviderProps} props 
 *
 */

export function ThemeProvider({ children,...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}