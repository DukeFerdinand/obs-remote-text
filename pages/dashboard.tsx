import { NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <section className={`w-full md:w-5/6`}>
      <h2 className={`text-white font-black text-2xl tracking-wide`}>
        Hello, ADD USERNAME
      </h2>
      <p className={`text-white tracking-wide`}>Edit your layouts below</p>
      <article className={`text-white mt-5`}>
        <div className=" border-dashed border rounded-2xl flex justify-center p-5 mb-4">
          <button
            className={`py-3 px-5 bg-blue-900 hover:bg-blue-950 rounded-xl`}
          >
            Create a Layout
          </button>
        </div>
        <div className={`bg-gray-900 hover:bg-gray-800 p-5 rounded-xl`}>
          <h3 className={`text-xl`}>TikTok OBS Layout</h3>
        </div>
      </article>
    </section>
  );
};

export default Dashboard;
