import Link from "next/link";

function Products() {
  return (
    <Link href={"products/new"} className="btn-primary">
      Add new product
    </Link>
  );
}

export default Products;
