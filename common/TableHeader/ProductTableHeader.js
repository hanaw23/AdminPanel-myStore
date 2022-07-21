import DeleteButton from "../../components/buttons/DeleteButton";
import EditButton from "../../components/buttons/EditButton";

class ProductTableHeader {
  static formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  static columns = [
    {
      name: "Product Id",
      selector: (row) => row.product_id,
      sortable: true,
    },
    {
      name: "Product Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Photo",
      selector: (row) => <img width={70} height={70} src={row.imageUrl} className="py-1" />,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => this.formatter.format(row.price),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-6" key={row.product_id}>
          <EditButton productId={row.product_id} name={row.name} category={row.category} description={row.description} price={row.price} image={row.imageUrl} title="Product" />
          <DeleteButton productId={row.product_id} productName={row.name} title="Product" />
        </div>
      ),
    },
  ];
}

export default ProductTableHeader;
