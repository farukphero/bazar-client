import { SingleProduct } from "@/Components/SingleProduct/SingleProduct";

const Products = () => {
  return (
    <div className="w-3/4 mx-auto py-28 px-10">
      <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 ">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </div>
  );
};

export default Products;
