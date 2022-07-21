import ProductEditForm from '../forms/Product/ProductEditForm';
import ProductAddForm from '../forms/Product/ProductAddForm';

function ProductDrawer(props) {
  const switchDrawerCase = () => {
    switch (props.title) {
      case 'Add':
        return <ProductAddForm onClose={props.onClose} />;
      case 'Edit':
        return <ProductEditForm onClose={props.onClose} productId={props.productId} name={props.name} category={props.category} description={props.description} price={props.price} image={props.image} />;

      default:
    }
  };

  return (
    <main
      className={` bg-gray-100 fixed  h-full overflow-hidden z-10 bg-opacity-25 inset-0 transform ease-in-out ${
        props.isOpen ? ' transition-opacity opacity-100 duration-500 translate-x-0 bg-gray-700 ' : 'transition-all delay-500 opacity-0 translate-x-full  '
      }`}
    >
      <section
        className={`bg-gray-100 w-screen max-w-lg right-0 absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform overflow-y-auto overflow-x-hidden text-gray-700 ${
          props.isOpen ? ' translate-x-0 ' : ' translate-x-full '
        }`}
      >
        <article className="relative w-screen max-w-lg p-8 flex flex-col h-full bg-gray-100">
          <div className="flex justify-between">
            <header className="font-bold text-lg text-left flex">
              {props.title}
              {' '}
              Product
            </header>
            {props.showCloseButton ? (
              <div>
                <button onClick={props.onClose} className="text-lg font-semibold h-2 w-6 ">
                  X
                </button>
              </div>
            ) : null}
          </div>
          {switchDrawerCase()}
        </article>
      </section>
      <section aria-hidden="true" className=" w-screen h-full" />
    </main>
  );
}

export default ProductDrawer;
