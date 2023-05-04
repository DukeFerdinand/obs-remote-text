import { generateRedirect } from "@/lib/generateRedirect";
import { COOKIE_NAME } from "@/lib/jwt";
import Cookies from "cookies";
import { GetServerSideProps } from "next";
import Link from "next/link";

interface HomeProps {
  showDashboardLink: boolean;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({
  req,
  res,
}) => {
  const cookies = new Cookies(req, res);

  if (cookies.get(COOKIE_NAME)) {
    return {
      props: { showDashboardLink: true },
    };
  }

  return { props: { showDashboardLink: false } };
};

export default function Home(props: HomeProps) {
  return (
    <div className={`text-white`}>
      <h1 className={`text-4xl font-extrabold tracking-wide`}>
        OBS Remote Text Entry
      </h1>
      <p className={`text-center pt-4 tracking-wide`}>
        A simple browser source text field for OBS.
      </p>
      {/* Login buttons */}
      <div className={`mt-4 flex justify-center`}>
        {props.showDashboardLink ? (
          <Link
            href={"/dashboard"}
            className={`bg-purple-600 rounded-lg inline-block p-2 px-5`}
          >
            Go to Dashboard
          </Link>
        ) : (
          <a
            href={generateRedirect()}
            className={`bg-purple-600 rounded-lg inline-block p-2 px-5`}
          >
            Login with Twitch
          </a>
        )}
      </div>
    </div>
  );
}
