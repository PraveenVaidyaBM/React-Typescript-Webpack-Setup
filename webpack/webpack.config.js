const {merge} = require("webpack-merge")
const cmmonConfig = require('./webpack.common')

module.exports = (envVar) => {
    const {env} = envVar
    const envConfig = require(`./webpack.${env}.js`)
    const config = merge(cmmonConfig,envConfig)
    return config;
}