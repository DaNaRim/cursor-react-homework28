import {darken, lighten} from "polished"

export const darkTheme = {

  $navHeight: "4rem",

  $backgroundColors: {
    $primary: "#277bc0",
    $secondary: "#ffb200",
    $tertiary: "#ffcb42",
    $quaternary: "#fff4cf",
  },

  $borderColors: {
    $primary: "#121212",
  },

  $textColors: {
    $primary: "#fff",
    $secondary: "#000036",
    $link: "#90caf9",
    $error: "#ff5252",
  },

  $margins: {
    $component: "2rem",
    $innerBlock: "1rem",
  },

  $paddings: {
    $primary: "1rem",
  },

  $borderRadius: {
    $primary: "2.5rem",
    $secondary: "0.3rem",
  },

  $fonts: {
    $primary: "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
  },

  $fontsSize: {
    $h1: "1.5rem",
    $h2: "1.2rem",
    $secondary: "0.8rem",
  },
}

darkTheme.$boxShadows = {
  $primary: `0.5rem 0.5rem 1rem ${darken(0.2, darkTheme.$backgroundColors.$tertiary)},
             -0.5rem -0.5rem 1rem ${lighten(0.1, darkTheme.$backgroundColors.$tertiary)}`,
}

darkTheme.$textColors.$tertiary = lighten(0.05, darkTheme.$textColors.$secondary)



