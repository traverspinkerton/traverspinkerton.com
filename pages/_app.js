import React from "react";
import App from "next/app";
import "../css/tailwind.css";
import { Analytics } from "@vercel/analytics/react";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
    );
  }
}

export default MyApp;
