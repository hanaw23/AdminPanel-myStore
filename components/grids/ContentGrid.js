import { useState, useEffect } from "react";
import axios from "axios";
import CreateButton from "../buttons/CreateButton";

import DeleteButton from "../buttons/DeleteButton";
import EditButton from "../buttons/EditButton";
import { UrlWebAdmin } from "../../static";

const ContentGrid = (props) => {
  const [carousel, setCarousel] = useState({});
  const [hoverAction, setHoverAction] = useState(false);
  const [hoverAction2, setHoverAction2] = useState(false);
  const [hoverAction3, setHoverAction3] = useState(false);

  useEffect(() => {
    axios
      .get(`${UrlWebAdmin()}primaryContent`)
      .then((response) => {
        setCarousel(response.data);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  return (
    <div className="flex gap-20">
      <div className="grid grid-cols-3 gap-20">
        <div>
          <div
            className="border bg-[url('/assets/images/AboutImage.jpg')] bg-cover bg-no-repeat h-40 w-80 rounded-[10px] flex justify-end hover:h-60 hover:bg-[length:322px_180px] hover:border-gray-300 shadow-lg shadow-gray-400 border-transparent"
            onMouseEnter={() => setHoverAction(true)}
            onMouseLeave={() => setHoverAction(!hoverAction)}
          >
            {hoverAction ? (
              <div className="mt-[195px] mr-[110px]">
                <div className="flex text-gray-700 gap-6">
                  <CreateButton onOpenDrawer={props.setOpenAddAction} />
                  <EditButton onOpenDrawe={props.setOpenEditAction} />
                  <DeleteButton />
                </div>
              </div>
            ) : (
              <h1 className="mt-2 mr-[30px] text-gray-300 text-sm">Head Web</h1>
            )}
          </div>
        </div>
        <div>
          {carousel.content?.map((item) => (
            <div
              key={item.pc_id}
              // className={`border ${`bg-${item.pc_id}`} bg-cover bg-no-repeat h-40 w-80 rounded-[10px] flex justify-end hover:h-60 hover:bg-[length:322px_180px] hover:border-gray-300 shadow-lg shadow-gray-400 border-transparent`}
              className="border bg-[url('/assets/images/AboutImage.jpg')] bg-cover bg-no-repeat h-40 w-80 rounded-[10px] flex justify-end hover:h-60 hover:bg-[length:322px_180px] hover:border-gray-300 shadow-lg shadow-gray-400 border-transparent"
              onMouseEnter={() => setHoverAction2(true)}
              onMouseLeave={() => setHoverAction2(!hoverAction2)}
            >
              {hoverAction2 ? (
                <div className="mt-[195px] mr-[110px]">
                  <div className="flex text-gray-700 gap-6">
                    <CreateButton />
                    <EditButton idContent={item.pc_id} nameContent={item.name} descriptionContent={item.description} imgContent={item.imageUrl} />
                    <DeleteButton idContent={item.pc_id} nameContent={item.name} />
                  </div>
                </div>
              ) : (
                <h1 className="mr-3 mt-2 text-gray-300 text-sm">{item.name}</h1>
              )}
            </div>
          ))}
        </div>
        <div>
          <div
            className="border bg-[url('/assets/images/lake.jpg')] bg-cover bg-no-repeat h-40 w-80 rounded-[10px] flex justify-end hover:h-60 hover:bg-[length:322px_180px] hover:border-gray-300 shadow-lg shadow-gray-400 border-transparent"
            onMouseEnter={() => setHoverAction3(true)}
            onMouseLeave={() => setHoverAction3(!hoverAction3)}
          >
            {hoverAction3 ? (
              <div className="mt-[195px] mr-[110px]">
                <div className="flex text-gray-700 gap-6">
                  <CreateButton onOpenDrawer={props.setOpenAddAction} />
                  <EditButton onOpenDrawe={props.setOpenEditAction} />
                  <DeleteButton />
                </div>
              </div>
            ) : (
              <h1 className="mr-3 mt-2 text-gray-300 text-sm">Footer Web</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentGrid;
