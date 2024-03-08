/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './packages/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            textColor: {
                'primary-tw': 'rgb(var(--primary-color))',
                'secondary-tw': 'rgb(var(--secondary-color))',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: []
}

