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
            pivotal : {
                files: ['src/**/*.js', 'specs/**/*.js'],
                tasks: 'jasmine:pivotal:build'
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
                    dist: 'tmp',
                    type: 'mustache'
                },
                globals: {
                    dev: 'this is global'
                }
            },
        },

        // Unit tests.
        jasmine: {
            pivotal: {
                src: 'src/**/*.js',
                options: {
                    specs: 'spec/*Spec.js',
                    helpers: 'spec/*Helper.js'
                }
            }
        },
    });

    // Carrega os plugins que proveem as tarefas especificadas no package.json.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mustache-html');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Tarefa padrão que será executada se o Grunt
    // for chamado sem parâmetros.
    grunt.registerTask('test', ['mustache_html', 'jasmine']);
    grunt.registerTask('default', ['jshint','test']);

};