const LoadingSkeleton = () => {
  return (
    <div className="w-full py-5  mx-auto mt-20">
      <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
        <div className="flex flex-col space-y-3 w-3/4">
          <div className="w-full bg-gray-300 h-6 rounded-md " />
          <div className="w-2/4 bg-gray-300 h-6 rounded-md " />
          <div className="w-3/4 bg-gray-300 h-6 rounded-md " />
          <div className="w-2/4 bg-gray-300 h-6 rounded-md " />
          <div className="w-36 bg-gray-300 h-6 rounded-md " />
          <div className="w-24 bg-gray-300 h-6 rounded-md " />
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
