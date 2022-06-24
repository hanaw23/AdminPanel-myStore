import { useState } from "react";

const ContentGrid = () => {
  const [hoverAction, setHoverAction] = useState(false);

  return (
    <div className="flex gap-20">
      <div className="grid grid-cols-3 gap-20">
        <div>
          <button
            className="border bg-[url('/assets/images/AboutImage.jpg')] bg-cover bg-no-repeat h-40 w-80 rounded-[10px] flex justify-end hover:h-60 hover:bg-[length:322px_180px] hover:border-gray-300"
            onMouseEnter={() => setHoverAction(true)}
            onMouseLeave={() => setHoverAction(!hoverAction)}
          >
            <div>
              {hoverAction ? (
                <div className="mt-[195px] mr-[110px]">
                  <div className="flex text-gray-700 gap-6">
                    <div>Edit</div>
                    <div>Delete</div>
                  </div>
                </div>
              ) : (
                <h1 className="mt-2 mr-[30px] text-gray-300 text-sm">Head Web</h1>
              )}
            </div>
          </button>
        </div>
        <div>
          <button className="border bg-[url('/assets/images/duduknih.webp')] bg-cover bg-no-repeat h-40 w-80 rounded-[10px] flex justify-end">
            <h1 className="mr-3 mt-2 text-gray-500 text-sm">Carousel</h1>
          </button>
        </div>
        <div>
          <button className="border bg-[url('/assets/images/lake.jpg')] bg-cover bg-no-repeat h-40 w-80 rounded-[10px] flex justify-end">
            <h1 className="mr-3 mt-2 text-gray-300 text-sm">Footer Web</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentGrid;
