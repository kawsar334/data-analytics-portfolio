import React from "react";
import ImageSlider from "./ImageSlider";
import MiniImageSlider from "./MiniImgSlider";

const Popup = ({ data, handleTogle }) => {
  return (
    <div className="bg-white h-[100vh] overflow-scroll  text-black p-5 relative">
      <div
        onClick={handleTogle}
        className="absolute  right-[30px] top-[30px]  px-5 py-1 rounded bg-[crimson] text-[white] cursor-pointer"
      >
        Close
      </div>
      <div className=" flex justify-start flex-wrap gap-2 my-2 items-center">
        <h1 className="text-xl font-semibold  capitalize ">Tech:</h1>
        {data.tech &&
          data.tech?.map((i) => (
            <span className="ml-1 bg-blue text-white rounded px-1">{i}</span>
          ))}
      </div>

      {data?.images || data?.miniImages ? (
        <>
          {data?.miniImages ? (
            <MiniImageSlider images={data?.miniImages} />
          ) : (
            <ImageSlider images={data?.images} />
          )}
        </>
      ) : (
        <img
          src={data?.imageUrl}
          alt={data?.title}
          className="w-full border p-10 md:w-[60%] mt-3 h-[300px] md:h-[500px] rounded object-cover"
        />
      )}

      <h3 className="text- font-semibold mb-2">{data.title}</h3>
      <h3 className="text-[14px] font-semibold mb-2">{data.description}</h3>
      <div className="flex   w-[100%] m-auto flex-col ">
        <div className="flex justify-start items-start flex-col  gap-3">
          {data?.techStack && (
            <>
              <h2 className="text-xl font-semibold mb-1 ">Tech Stack</h2>
              <ul className="flex gap-3 flex-wrap ">
                {data?.techStack.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1 rounded   bg-textcolor  text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {data?.adminCredentials && (
            <div className="w-[80%]   space-y-4 border p-4 rounded ">
              <h2 className="text-xl font-bold text-textcolor  ">
                Admin Credentials
              </h2>
              <p className="w-[90%]   ">
                <span className="font-bold">Email</span>:{" "}
                {data?.adminCredentials?.email}
              </p>
              <p className="w-[90%]   ">
                <span className="font-bold">Password</span>:{" "}
                {data?.adminCredentials?.password}
              </p>
            </div>
          )}
          {data?.features && (
            <>
              <h2 className="text-xl font-semibold mb-4">Features..</h2>
              <ol className="flex gap-3 flex-wrap flex-col justify-start items-start  w-full p-4 ">
                {data?.features.map((item) => (
                  <li key={item} className=" px-3 py-1  ">
                    {" "}
                    * {item}
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
        <div className="flex justify-start items-start  md:flex-row bg-blue bg-opacity-20 rounded flex-wrap  p-4 gap-3  *:px-3">
          <a
            href={data.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 border rounded-[5px] bg-blue hover:bg-transparent transition  ease-in duration-300   px-1 cursor-pointer  hover:text-blue-700"
          >
            Live Demo
          </a>
          <a
            href={data.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 border rounded-[5px] px-1 cursor-pointer transition-all duration-500 ease-linear  hover:bg-blue"
          >
            GitHub Repo
          </a>
          {data?.serverRepo && (
            <a
              href={data.serverRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 border rounded-[5px] px-1 cursor-pointer transition-all duration-500 ease-linear bg-blue text-white"
            >
              server side
            </a>
          )}
          <button
            className=" text-white bg-[crimson] px-3  cursor-pointer rounded    "
            onClick={handleTogle}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
