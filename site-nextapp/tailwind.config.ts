import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            indigo: {
                100: "#cedde7",
                200: "#9dbcd0",
                300: "#6c9ab8",
                400: "#3b79a1",
                500: "#0a578a",
                600: "#08466e",
                700: "#063452",
                800: "#042337",
                900: "#02111b",
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                md: '1.5rem',
                lg: '2rem'
            },
        }
    },
    plugins: []
}
export default config