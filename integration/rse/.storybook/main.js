const config = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: true,
    },
};
export default config;