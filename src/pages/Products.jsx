import { Link } from "react-router-dom";
import { products } from "../assets/data/tempData";

const Products = () => {
    return (
        <div className="page grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.map((product, index) => (
                <Link key={index} className="border-[1px] border-highlight/30 rounded-lg shadow-lg bg-primary/50 overflow-hidden hover:scale-[99%] duration-150 ease-in-out cursor-pointer" to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} className="w-full aspect-square object-cover contrast-75" />
                    <div className="px-4 pb-2">
                        <h2 className="mt-2 font-bold tracking-tight">{product.name}</h2>
                        <p className="font-bold">Rs. {product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Products;
