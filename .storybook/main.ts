import type { StorybookConfig } from "@storybook/react-webpack5";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.resolve!.plugins = [
      ...(config.resolve?.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve?.extensions,
      }),
    ];

    config.plugins!.push(new MiniCssExtractPlugin({ filename: "styles.css" }));

    // Add Linaria loader after babel-loader
    config.module.rules.splice(1, 0, {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve("@linaria/webpack-loader"),
          options: {
            sourceMap: true,
            babelOptions: {
              configFile: path.join(__dirname, "../.babelrc"),
            },
          },
        },
      ],
    });

    // Replace CSS loader
    config.module.rules = config.module.rules.filter(
      (rule) => rule.test?.toString() !== "/\\.css$/",
    );

    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: "css-loader",
          options: { sourceMap: true },
        },
        {
          loader: "postcss-loader",
        },
      ],
    });

    return config;
  },
};
export default config;
