import { extendTheme } from "@chakra-ui/react";

export const toastStyles = {
  style: {
    fontSize: '12px',
    borderRadius: '0.75rem',
    border: '1px solid #222',
    color: '#fff',
    backgroundColor: '#060606'
  }
};

export const customTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  styles: {
    global: {
      'html, body': {
        minHeight: '100vh',
        fontFamily: '"DM Sans", sans-serif',
        backgroundColor: '#060606'
      }
    }
  },
  components: {
    Slider: {
      baseStyle: {
        thumb: {
          bg: "#fff",
          _focus: {
            boxShadow: "none"
          },
        },
      },
      variants: {
        solid: {
          track: {
            bg: "#222",
          },
          filledTrack: {
            bg: "#fff",
          },
        },
      },
      defaultProps: {
        variant: "solid",
      },
    },
    Switch: {
      baseStyle: {
        track: {
          _checked: {
            bg: "#00d8ff",
          },
          _focus: {
            boxShadow: "0 0 0 3px rgba(0, 216, 255, 0.5)",
          },
          _active: {
            bg: "#00d8ff",
          },
        },
        thumb: {
          _checked: {
            bg: "white",
          },
          _active: {
            bg: "white",
          },
        },
      },
    }
  }
});