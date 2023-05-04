import React, { PropsWithChildren } from "react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Layout = (props: PropsWithChildren) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-black ${inter.className}`}
    >
      {props.children}
      <footer className={`text-center`}>
        <p className={`text-white tracking-wide`}>
          MIT License - Not affiliated OBS, Twitch, or Amazon.
        </p>
        <a
          target="_blank"
          className={`text-purple-600 tracking-wide`}
          href="https://twitch.tv/duke_ferdinand"
        >
          Coded by Duke_Ferdinand
        </a>
      </footer>
    </main>
  );
};
