/**
 * Created by Guilherme on 2015-10-15.
 */
module.exports = function(grunt) {

    // Inicializa as tarefas do Grunt com as configurações que seguem
    grunt.initConfig({

        // Uma lista de arquivos que terão sua sintaxe checada com JSHint
        jshint: {files: ['Gruntfile.js', 'js/**/*.js'] },

        // Tarefas que serão executadas com 'grunt watch'
        watch: {
            files: '<%= jshint.files %>',
            tasks: 'jshint',
            jasmine : {
                files: ['src/**/*.js', 'specs/**/*.js'],
                tasks: 'jasmine:build'
            },
            client: {
                files: ['src/**/*']
            }
        },

        // Configuration to be run (and then tested).
        mustache_html: {
            default_options: {
                options: {
                    src: 'src'
                }
            },
            custom_options: {
                options: {
                    src: 'src',

                    type: 'mustache'
                },

            },
        },

        // Unit tests.
        jasmine: {
           // pivotal: {
                src: 'spec/**/*.js',
                options: {
                    specs: 'spec/*Spec.js',
                    helpers: 'spec/*Helper.js'
                }
            //}
        },

        connect: {
            client: {
                options: {
                    port: 9000,
                    base: 'src',
                    open: true
                }
            }
        }
    });

    // Carrega os plugins que proveem as tarefas especificadas no package.json.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mustache-html');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-connect');


    // Tarefa padrão que será executada se o Grunt
    // for chamado sem parâmetros.
    grunt.registerTask('mustache', ['mustache_html']);
    grunt.registerTask('preview', ['connect:client','watch:client']);
    grunt.registerTask('run',['mustache', 'preview']);
    grunt.registerTask('test', ['jshint', 'jasmine','watch:jasmine']);

};