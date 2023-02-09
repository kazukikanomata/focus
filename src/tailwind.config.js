const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/tasks/top.blade.php',
        './resources/views/tasks/create.blade.php',
        './resources/views/tasks/edit.blade.php',
        './resources/views/tasks/index.blade.php',
        './resources/views/tasks/show.blade.php',
        './resources/views/messages/index.blade.php',
        './resources/views/messages/show.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms'),require("daisyui")],
};
