function AddButton(props) {
  return (
    <div className="bg-indigo-400 w-[100px] rounded border-transparent">
      <button className=" text-white text-sm mt-2 mb-2 ml-2 mr-4 w-20" onClick={props.setOpen}>
        {props.titleButton}
      </button>
    </div>
  );
}

export default AddButton;
