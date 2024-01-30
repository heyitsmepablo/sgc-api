
import { ThemeProvider } from "./theme-provider"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Body({children}) {
    return (
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
    <body className={inter.className + " flex h-screen w-screen "}>
        {children}
    </body>
    </ThemeProvider>  
    )
}