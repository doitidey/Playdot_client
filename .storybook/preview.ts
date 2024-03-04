import type { Preview } from "@storybook/react";
import "@/styles/GlobalStyles.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "darkBackground",
      values: [
        {
          name: "darkBackground",
          value: "#1b1c1d",
        },
      ],
    },
  },
};

export default preview;
