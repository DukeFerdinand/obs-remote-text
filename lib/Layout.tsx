import React, { PropsWithChildren } from "react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Layout = (props: PropsWithChildren) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-black ${inter.className}`}
    >
      {props.children}
      <a className={`text-purple-600`} href="https://twitch.tv/duke_ferdinand">
        written by Duke_Ferdinand
      </a>
    </main>
  );
};
