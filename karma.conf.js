module.exports = function (config) {
    config.set({
        basePath: '',
        files: [
            {pattern: 'src/**/!(*main).js', included: true, watched: true, served: true}
        ],
        exclude : [
            "src/js/main.js"
        ],
        autoWatch : false,
        singleRun: true,
        frameworks : [ 'jasmine' ],
        browsers : [ 'PhantomJS' ],
        plugins : [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-spec-reporter',
            'karma-coverage'
        ],
        logLevel: 'config.LOG_DEBUG',
        reporters: ['spec', 'coverage'],
        preprocessors: {
            'src/**/!(*spec).js': ['coverage']
        },
        coverageReporter: {
            reporters: [
                {type: 'html', dir: 'coverage/', file: 'coverage.html'}
            ]
        }
    });
};