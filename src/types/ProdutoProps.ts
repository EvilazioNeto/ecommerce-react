interface ProdutoProps {
    id: number;
    title: string;
    description: string;
    category: string;
    brand: string;
    price: number;
    discountPercentage: number;
    stock: number;
    rating: number;
    thumbnail: string;
    images: string[];
}

export default ProdutoProps;
