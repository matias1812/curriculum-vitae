import theme from 'tailwindcss-animated/src/theme'
/**@type {import('tailwindcss/tailwind-config').TailwindConfig}*/

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,html,css}'],
    theme: {
        extend: {},
    },
    plugins:[
        require('tailwindcss-animated')
    ],
}