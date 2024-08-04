const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/app/index.js",
    module : {
        rules: [
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            // {
            //     test: /\.(?:js|mjs|cjs)$/,
            //     exclude: /node_modules/,
            //     use: {
            //       loader: 'babel-loader',
            //       options: {
            //         presets: [
            //           ['@babel/preset-env', { targets: "defaults" }]
            //         ],
            //         plugins: ['@babel/plugin-proposal-class-properties']
            //       }
            //     }
            //   }
            {
                test: /\.(js|jsx)$/, // Match both .js and .jsx files
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  }
                }
              }

        ] 
    },
    output: {
        path: path.resolve(__dirname, "dist" ),
        filename: "bundle.js"
    },
    plugins : [new HtmlWebpackPlugin(
        {
            template: path.resolve(__dirname, 'index.html')
        }
    )],
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
    },
}