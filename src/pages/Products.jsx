import { products } from "../assets/data/tempData";
import StaticBackground from "../components/Background";

const Products = () => {
    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 relative">
            {products.map((product, index) => (
                <div key={index} className="border rounded-lg shadow-lg p-4 bg-primary/70">
                    <img src={product.image} alt={product.name} className="w-full aspect-square object-cover rounded-md contrast-75" />
                    <h2 className="text-xl font-semibold mt-1">{product.name}</h2>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-lg font-bold mt-1">Rs. {product.price}</p>
                    <button className="mt-2 btn">Buy Now</button>
                </div>
            ))}
        </div>
    );
}

export default Products;
