/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.02em', fontWeight: '300' }],
                sm: ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.015em', fontWeight: '300' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '300' }],
                lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.005em', fontWeight: '400' }],
                xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '0em', fontWeight: '400' }],
                '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.005em', fontWeight: '600' }],
                '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
                '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' }],
                '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
                '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '800' }],
                '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '900' }],
                '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.035em', fontWeight: '900' }],
                '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '900' }],
            },
            fontFamily: {
                heading: "avenir-lt-w01_85-heavy1475544",
                paragraph: "avenir-lt-w01_35-light1475496"
            },
            colors: {
                highlightyellow: '#B9B04A',
                custom2: '#6366f1',
                custom3: '#6366f1',
                foreground: '#3E1F0D',
                background: '#F9F3E9',
                secondary: '#3E1F0D',
                'secondary-foreground': '#F9F3E9',
                'primary-foreground': '#FFFFFF',
                primary: '#D12318'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
}
