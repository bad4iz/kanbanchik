const path = require('path');

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules.push(
    {
        test: /\.scss$/,
        use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
        ],
    },
    
    // if you'd like to use pug
    {
        test: /\.pug$/,
        use: [
            { loader: 'html-loader' },
            { loader: 'pug-html-loader' }
        ]
    });

  return defaultConfig;
};