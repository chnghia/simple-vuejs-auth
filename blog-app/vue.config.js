module.exports = {
    configureWebpack: config => {
        config.output.filename = 'js/[name].js';
        config.output.chunkFilename = 'js/[name].js';
    },
    chainWebpack: config => {
        const extractCSSPlugin = config.plugin("extract-css");
        extractCSSPlugin &&
            extractCSSPlugin.tap(() => [
                {
                    filename: "css/[name].css",
                    chunkFilename: "css/[name].css"
                }
            ]);
    }
};