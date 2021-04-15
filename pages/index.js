import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`search?term=${term}`)
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Paul's Engine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar
            url={"https://avatars.githubusercontent.com/u/48520939?s=60&v=4"}
          />
        </div>
      </header>
      {/* Body */}
      <form className="flex flex-col items-center mt-10 flex-grow w-4/5">
        <Image
          src="https://i.ibb.co/9qyfqYH/coollogo-com-9682054.png"
          height={100}
          width={400}
        />
        <div className="flex w-full hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
          />
          <MicrophoneIcon className="h-5 mr-3 text-gray-500" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Paul Search
          </button>
          <button onClick={search} className="btn">
            Try Something
          </button>
        </div>
      </form>
      {/* Footer */}
      <Footer />
    </div>
  );
}
