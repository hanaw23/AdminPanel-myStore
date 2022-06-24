/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useRouter } from "next/router";
// import { useDispatch } from "react-redux";

// import ModalSuccess from "../Modals/SuccessMessage";
// import ModalError from "../Modals/ErrorMessage";

function ContentEditForm(props) {
  const [name, setName] = useState(props.nameContent);
  const [description, setDescription] = useState(props.descriptionContent);

  //   const [success, setSuccess] = useState("");
  //   const [failed, setFailed] = useState("");

  const router = useRouter();
  //   const dispatch = useDispatch();

  const editContentSubmit = async () => {
    try {
      const response = await axios.post(`${UrlWebAdmin()}/primaryContent/update/:${props.idContent}`, {
        name: name,
        description: description,
      });
      if (response) {
        console.log(response);
        router.push("/contentManagement");
        // setSuccess(`Product ID : ${productId} and Product Name : ${name}`);
        // dispatch(editProduct(response.data.result));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="text-sm bg-white ">
        <div className="mt-4">
          <label htmlFor="photo" className="mb-4">
            Carousel Photo :
          </label>
          <div className="ml-80 mb-2 h-[80px] w-[80px] mt-2">
            <img src={props.imgContent} alt="Product Photo" height={130} width={165} />
          </div>
        </div>

        <div className="mt-6 flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            className="text-gray-700 px-3 border border-gray-300 rounded w-[320px] h-10 mt-2  text-gray-700 focus:outline-blue-500"
            placeholder="Input Carousel Name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </div>
        <div className="mt-6 flex flex-col">
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            className="text-gray-700 px-3 border border-gray-300 rounded w-[500px] h-[100px] mt-2  text-gray-700 focus:outline-blue-500"
            placeholder="Type Carousel Description"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />
        </div>

        <div>
          <div className="flex gap-8 mt-20 justify-center">
            <button className="border border-transparent bg-[#3CA6A6] text-sm w-[255px] h-12 rounded text-white font-bold" type="submit" onSubmit={editContentSubmit}>
              Submit
            </button>
            <button className="border border-[#3CA6A6] text-sm w-[255px] h-12 rounded font-bold text-[#3CA6A6]" onClick={props.onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      {/* {success.length !== 0 && <ModalSuccess message={success} actionTitle="Add Product" />}
      {failed.length !== 0 && <ModalError message={failed} actionTitle="Add Product" />} */}
    </>
  );
}

export default ContentEditForm;
