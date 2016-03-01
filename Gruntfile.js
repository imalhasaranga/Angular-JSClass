module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['src/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        uglify: {
            build: {
                src: 'src/ngJsClass.js',
                dest: 'build/ngJsClass.min.js'
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, flatten: true, src: 'src/ngJsClass.js', dest: 'build/', filter: 'isFile' },
                    { expand: true, flatten: true, src: 'build/ngJsClass.min.js', dest: 'demo/vendor/', filter: 'isFile' },
                    { expand: true, flatten: true, src: 'src/ngJsClass.js', dest: 'demo/vendor/', filter: 'isFile' },
                ],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'uglify', 'copy']);

};
