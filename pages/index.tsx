import { generateRedirect } from "@/lib/generateRedirect";

export default function Home() {
  return (
    <div className={`text-white`}>
      <h1 className={`text-4xl font-bold tracking-wide`}>
        OBS Remote Text Entry
      </h1>
      <p className={`text-center pt-4 tracking-wide`}>
        A simple browser source text field for OBS.
      </p>
      {/* Login buttons */}
      <div className={`mt-4 flex justify-center`}>
        <a
          href={generateRedirect()}
          className={`bg-purple-600 rounded-lg inline-block p-2 px-5`}
        >
          Login with Twitch
        </a>
      </div>
    </div>
  );
}
