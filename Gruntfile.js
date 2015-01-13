/**
 * Created by ihasan on 12/23/2014.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // **********
        // Properties
        // **********

        app_dir: 'app',
        library_dir: 'lib',

        sass_dir: 'design',
        sass_images_dir: '<%= sass_dir %>/images',
        sass_dir_dist: '<%= library_dir %>/<%= sass_dir %>',
        sass_images_dir_dist: '<%= library_dir %>/<%= sass_images_dir %>',

        app_dir_dist: '<%= library_dir %>/<%= app_dir %>',

        // *****
        // Tasks
        // *****

        /**
         * Compile TypeScript files
         */
        ts: {
            default : {
                src: ["**/*.ts", "!node_modules/**/*.ts"],
                outDir: "<%= app_dir_dist %>"
            }
        },


        /**
        * Publish Bower Packages to assets/lib
        */
        bower: {
            install: {
                options: {
                    targetDir: "<%= library_dir %>",
                    layout: "byComponent",
                    cleanTargetDir: false
                }
            }
        },
        /**
        * Build SCSS files to assets/css
        * https://github.com/sindresorhus/grunt-sass
        */
        sass: {
            options: {
                // Places to look for files @included in scss files
                includePaths: [,
                    '<%= sass_dir %>'
                ],
                sourceMap: true,
                imagePath: '/<%= sass_images_dir %>'
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= sass_dir %>/',
                        src: '*.scss',
                        dest: '<%= sass_dir_dist %>',
                        ext: '.css'
                    }
                ]
            }
        }
    });

    // Let *load-grunt-tasks* require everything. Note: Only loads tasks starting with "grunt-"
    require('load-grunt-tasks')(grunt);

    // This command registers the default task which will install bower packages into assets/lib
    grunt.registerTask("default", ["bower:install","sass" ,"ts:default"]);
};