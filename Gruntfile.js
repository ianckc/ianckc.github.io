module.exports = function (grunt) {
    grunt.initConfig({

        // get the configuration info from package.json
        pkg: grunt.file.readJSON('package.json'),

        clean: [
            'css/main.css',
            'css/tailwind.css',
        ],

        // PostCSS - Tailwindcss and Autoprefixer
        postcss: {
            options: {
                map: true, // inline sourcemaps
                processors: [
                    require('tailwindcss')()
                ]
            },
            dist: {
                src: 'src/css/tailwind.css',
                dest: 'css/main.css'
            }
        },

    })

    // Load Grunt Plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-postcss');

    // Register Tasks
    // Default task(s).
    grunt.registerTask('default', [
        'clean',
        'postcss',
    ]);

    // Compile Tailwind
    grunt.registerTask('compile-tailwindcss', ['postcss'])

}
