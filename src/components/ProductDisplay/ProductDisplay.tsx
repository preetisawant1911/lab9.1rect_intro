import React from 'react';
import { ProductDisplayProps } from '../../types';

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children
}) => {
  return (
    <div className="p-4 border rounded bg-white shadow">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover mb-4"
        />
      )}
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      {showDescription && (
        <p className="text-sm text-gray-600">{product.description}</p>
      )}
      {showStockStatus && (
        <p
          className={`text-sm ${
            product.inStock ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      )}
      {children}
      {onAddToCart && (
        <button
          onClick={() => onAddToCart(product.id)}
          className="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
