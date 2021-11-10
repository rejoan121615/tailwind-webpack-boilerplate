const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { importLoaders: 1 },
                    },
                    "postcss-loader",
                ],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    devServer: {
        static: "./",
        open: true,
        devMiddleware: {
            writeToDisk: true,
        },
    },
    plugins: [
        new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*'],
        cleanAfterEveryBuildPatterns: ['**/*'],
        })
    ],
};
