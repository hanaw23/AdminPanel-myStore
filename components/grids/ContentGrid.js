/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import CreateButton from "../buttons/CreateButton";
import DeleteButton from "../buttons/DeleteButton";
import EditButton from "../buttons/EditButton";

import { axiosGetCarousel } from "../../store/Action/Content/Carousel";
import { axiosGetSecondary } from "../../store/Action/Content/Secondary";

const ContentGrid = () => {
  const [carousel, setCarousel] = useState([]);
  const [secondary, setSecondary] = useState([]);

  const [hoverAction, setHoverAction] = useState(false);
  const [hoverAction2, setHoverAction2] = useState(false);
  const [hoverAction3, setHoverAction3] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosGetCarousel(setCarousel));
  }, []);

  useEffect(() => {
    dispatch(axiosGetSecondary(setSecondary));
  }, []);

  return (
    <div className="flex gap-20">
      <div className="grid grid-cols-3 gap-20 ml-[75px]">
        <div>
          <div
            className="border bg-[url('/assets/images/AboutImage.jpg')] bg-cover bg-no-repeat h-40 w-80 rounded-[10px] flex justify-end hover:h-60 hover:bg-[length:322px_180px] hover:border-gray-300 shadow-lg shadow-gray-400 border-transparent cursor-pointer"
            onMouseEnter={() => setHoverAction(true)}
            onMouseLeave={() => setHoverAction(!hoverAction)}
          >
            {hoverAction ? (
              <div className="mt-[195px] mr-[125px]">
                <div className="flex text-gray-700 gap-6">
                  {/* <CreateButton  /> */}
                  <EditButton />
                  <DeleteButton />
                </div>
              </div>
            ) : (
              <h1 className="mr-3 mt-2 text-gray-300 text-sm font-bold">About Us</h1>
            )}
          </div>
        </div>
        <div>
          {carousel.content?.length === 0 ? (
            <div className="border bg-gray-300 bg-cover bg-no-repeat h-40 w-80 rounded-[10px] flex justify-end shadow-lg shadow-gray-400 border-transparent cursor-pointer">
              <div className="flex flex-col justify-center mr-[100px] gap-2">
                <div className="ml-[40px]">
                  <CreateButton content="Carousel" />
                </div>
                <h1 className="text-m text-gray-500 font-semibold">Create Carousel</h1>
              </div>
            </div>
          ) : (
            carousel.content?.map((item) => (
              <div
                key={item.pc_id}
                // className={`border ${`bg-${item.imageUrl}`}
                className="border bg-[url('/assets/images/AboutImage.jpg')] bg-cover bg-no-repeat h-40 w-80 rounded-[10px] flex justify-end hover:h-60 hover:bg-[length:322px_180px] hover:border-gray-300 shadow-lg shadow-gray-400 border-transparent cursor-pointer"
                onMouseEnter={() => setHoverAction2(true)}
                onMouseLeave={() => setHoverAction2(!hoverAction2)}
              >
                {hoverAction2 ? (
                  <div className="mt-[195px] mr-[125px]">
                    <div className="flex text-gray-700 gap-6">
                      <EditButton idContent={item.pc_id} nameContent={item.name} descriptionContent={item.description} imgContent={item.imageUrl} content="Carousel" />
                      <DeleteButton idContent={item.pc_id} nameContent={item.name} content="Carousel" />
                    </div>
                  </div>
                ) : (
                  <h1 className="mr-3 mt-2 text-gray-300 text-sm font-bold">{item.name}</h1>
                )}
              </div>
            ))
          )}
        </div>
        <div>
          {secondary.content?.length === 0 ? (
            <div className="border bg-gray-300 bg-cover bg-no-repeat h-40 w-80 rounded-[10px] flex justify-end shadow-lg shadow-gray-400 border-transparent cursor-pointer">
              <div className="flex flex-col justify-center mr-[100px] gap-2 ">
                <div className="ml-[50px]">
                  <CreateButton content="Secondary" />
                </div>
                <h1 className="text-m text-gray-500 font-semibold">Create Secondary</h1>
              </div>
            </div>
          ) : (
            secondary.content?.map((item) => (
              <div
                key={item.sc_id}
                // className={`border ${`bg-${item.imageUrl}`}
                className="border bg-[url('/assets/images/AboutImage.jpg')] bg-cover bg-no-repeat h-40 w-80 rounded-[10px] flex justify-end hover:h-60 hover:bg-[length:322px_180px] hover:border-gray-300 shadow-lg shadow-gray-400 border-transparent cursor-pointer"
                onMouseEnter={() => setHoverAction3(true)}
                onMouseLeave={() => setHoverAction3(!hoverAction3)}
              >
                {hoverAction3 ? (
                  <div className="mt-[195px] mr-[125px]">
                    <div className="flex text-gray-700 gap-6">
                      <EditButton idContent={item.sc_id} nameContent={item.name} descriptionContent={item.description} imgContent={item.imageUrl} logoA={item.logoA} logoB={item.logoB} logoC={item.logoC} content="Secondary" />
                      <DeleteButton idContent={item.sc_id} nameContent={item.name} content="Secondary" />
                    </div>
                  </div>
                ) : (
                  <h1 className="mr-3 mt-2 text-gray-300 text-sm font-bold">{item.name}</h1>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentGrid;
