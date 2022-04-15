import { ReactNode } from "react";
import { Global, MantineProvider, ScrollArea } from "@mantine/core";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/800.css";
import "@fontsource/abril-fatface/400.css";

interface StylesProviderProps {
  children: ReactNode;
}

export function StylesProvider({ children }: StylesProviderProps) {
  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{
        fontFamily: "'Inter', sans-serif",
        headings: {
          fontFamily: "'Abril Fatface', sans-serif",
          fontWeight: 400,
        },
        primaryColor: "pink",
      }}
      styles={{
        TextInput: (theme) => ({
          error: { fontSize: theme.fontSizes.xs, textAlign: "left" },
        }),
        PasswordInput: (theme) => ({
          error: { fontSize: theme.fontSizes.xs, textAlign: "left" },
        }),
      }}
    >
      <Global
        styles={() => ({
          "*, *::before, *::after": {
            boxSizing: "border-box",
          },
          "*": {
            margin: 0,
          },
          body: {
            height: "100vh",
            maxWidth: "1920px",
            margin: "0 auto",
            lineHeight: 1.5,
            WebkitFontSmoothing: "antialiased",
          },
          "img, picture, video, canvas, svg": {
            display: "block",
            maxWidth: "100%",
          },
          "input, button, textarea, select": {
            font: "inherit",
          },
          "p, h1, h2, h3, h4, h5, h6": {
            overflowWrap: "break-word",
          },
          a: {
            display: "inline-block",
          },
          "#root": {
            isolation: "isolate",
            height: "100%",
          },
          // So `ScrollArea` content for the app takes up entire height
          "[data-radix-scroll-area-viewport] > div": {
            height: "100%",
          },
        })}
      />
      <ScrollArea
        type="scroll"
        scrollHideDelay={500}
        style={{ height: "100vh" }}
      >
        {children}
      </ScrollArea>
    </MantineProvider>
  );
}
