import LoadingIcon from "../svg/LoadingIcon";

function LoadingSpinner() {
  return (
    <div className="text-center py-32">
      <LoadingIcon />
      <div className="text-indigo-500 text-m font-semibold">Loading</div>
    </div>
  );
}

export default LoadingSpinner;
