import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-black ${inter.className}`}
    >
      <div className={`text-white`}>
        <h1 className={`text-4xl font-bold tracking-wide`}>
          OBS Remote Text Entry
        </h1>
        <p className={`text-center pt-4 tracking-wide`}>
          A simple browser source text field for OBS.
        </p>
      </div>
      <a className={`text-purple-600`} href="https://twitch.tv/duke_ferdinand">
        written by Duke_Ferdinand
      </a>
    </main>
  );
}
