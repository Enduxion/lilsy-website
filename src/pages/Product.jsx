import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { PiShoppingCart } from "react-icons/pi";

const Product = () => {
    const { id } = useParams();

    

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8"
        >
            <motion.div
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                className="rounded-lg overflow-hidden shadow-lg bg-white"
            >
                <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-[600px] object-cover"
                />
            </motion.div>

            <motion.div
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                className="space-y-6"
            >
                <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-3xl font-semibold text-gray-700">
                    ${(product.price / 100).toFixed(2)}
                </p>
                
                <p className="text-gray-600 text-lg">{product.description}</p>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-black text-white py-4 rounded-lg flex items-center justify-center gap-2 font-medium"
                >
                    <PiShoppingCart className="w-5 h-5" />
                    Add to Cart
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default Product;