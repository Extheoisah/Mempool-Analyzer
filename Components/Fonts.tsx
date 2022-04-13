import { Global } from "@emotion/react";

const Fonts = (props: any) => {
  return (
    <Global
      styles={`
  /* latin */
  @font-face {
    font-family: 'Heading';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/Arvo-Bold.ttf') format('woff2'), url('/fonts/Arvo-Bold.ttf') format('ttf');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin */
  @font-face {
    font-family: 'Heading-Regular';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/Arvo-Regular.ttf') format('ttf'), url('fonts/Arvo-Regular.ttf') format('ttf');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin */
  @font-face {
    font-family: 'Body-ExtraBold';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url('/fonts/OpenSans-ExtraBold.ttf') format('woff2'), url('fonts/OpenSans-ExtraBold.ttf') format('ttf');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin */
  @font-face {
    font-family: 'Body-Bold';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url('/fonts/OpenSans-Bold.ttf') format('woff2'), url('fonts/OpenSans-Bold.ttf') format('ttf');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin */
  @font-face {
    font-family: 'Body-SemiBold';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/OpenSans-SemiBold.ttf') format('woff2'), url('fonts/OpenSans-SemiBold.ttf') format('ttf');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin */
  @font-face {
    font-family: 'Body-Medium';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/OpenSans-Medium.ttf') format('woff2'), url('fonts/OpenSans-Medium.ttf') format('ttf');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin */
  @font-face {
    font-family: 'Body-Regular';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/fonts/OpenSans-Regular.ttf') format('woff2'), url('fonts/OpenSans-Regular.ttf') format('ttf');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin */
  @font-face {
    font-family: 'Body-Light';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/OpenSans-Light.ttf') format('woff2'), url('fonts/OpenSans-Light.ttf') format('ttf');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  `}
    />
  );
};

export default Fonts;
