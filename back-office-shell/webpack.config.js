const path = require('path');

module.exports = {
    lintOnSave: false,
    module: {
        rules: [
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sourceMap: true,
                            sassOptions: {
                                fiber: false,
                            },
                            data: `
                             @import "@/assets/scss/reset.scss";
                             @import "@/assets/scss/common.scss";
                             @import "@/assets/scss/variables.scss";
                            `
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '~@': path.resolve(__dirname, 'assets/')
        },
    },
}
