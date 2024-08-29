

import Link from "next/link";
import { CiMail, CiMap, CiMobile4 } from "react-icons/ci";
const page = () => {
  return (
    <>
      <div className="">
        <div className="max-w-[85%] mx-auto py-32">
          <h1 className="text-3xl text-center">Have any question?</h1>
          <div className="flex flex-col gap-6 sm:flex-row justify-between items-center py-12 ">
            <div className="phone flex items-center justify-center flex-col">
              <CiMobile4 size={50} />
              <p className="font-semibold py-2">123-456-789-0</p>
            </div>
            <div className="location flex items-center justify-center flex-col">
              <CiMap size={50} />
              <p className="font-semibold py-2"> Dhaka,Bangladesh</p>
            </div>
            <div className="mail flex items-center justify-center flex-col">
              <CiMail size={50} />
              <p className="font-semibold py-2">email@gmail.com</p>
            </div>
          </div>
          <div>
            <p className="font-semibold py-4 text-lg">Send us a message!</p>
            <div className="grid grid-cols-2 sm:grid-cols-3  gap-5">
              <input
                type="text"
                className="bg-transparent outline-none rounded-xl border border-black p-2 text-lg"
                placeholder="Your name..."
              />
              <input
                type="text"
                className="bg-transparent outline-none rounded-xl border border-black p-2 text-lg"
                placeholder="Your email..."
              />
              <input
                type="text"
                className="col-span-2 sm:col-span-2 lg:col-span-1 bg-transparent outline-none rounded-xl border border-black p-2 text-lg"
                placeholder="Your subject..."
              />
              <textarea
                placeholder="Your message"
                className="col-span-2 sm:col-span-3 p-2 rounded-xl text-lg outline-none bg-transparent border border-black my-5"
                rows={5}
              ></textarea>
            </div>
                      <div className="flex justify-end">
                          <Link className="bg-gray-400 border-2 duration-300 border-black text-white py-2 px-3 rounded-full hover:bg-transparent hover:text-black" href={'/'}>Submit Here</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
