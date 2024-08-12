import type { Preview } from "@storybook/react";
import React from "react";
import "../src/app/globals.css";
import { AppProviders } from "../src/utils/AppProviders";
const preview: Preview = {
  decorators: [
    (Story) => (
      <AppProviders>
        <Story />
      </AppProviders>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
