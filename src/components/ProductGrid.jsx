import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  collection,
  getDocs,
  query,
  where,
  limit
} from 'firebase/firestore';
import { db } from '../firebase';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ProductGrid({ filters = {} }) {
  const queryParams = useQuery();
  const categoryFromURL = queryParams.get('category');
  const searchFromURL = queryParams.get('search')?.toLowerCase().trim();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    category = [],
    size = [],
    color = [],
    available = [],
    priceRange = [0, Infinity],
  } = filters;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, 'products');
        const conditions = [];

        // ✅ Apply Firestore filters instead of fetching everything
        if (categoryFromURL) {
          conditions.push(where('category', '==', categoryFromURL));
        } else if (category.length === 1) {
          // Firestore supports 'in' for up to 10 values, but here we only
          // push if it's a single value for simplicity
          conditions.push(where('category', '==', category[0]));
        }

        if (priceRange[0] > 0) {
          conditions.push(where('price', '>=', priceRange[0]));
        }

        if (priceRange[1] !== Infinity) {
          conditions.push(where('price', '<=', priceRange[1]));
        }

        if (size.length === 1) {
          conditions.push(where('size', '==', size[0]));
        }

        if (color.length === 1) {
          conditions.push(where('color', '==', color[0]));
        }

        if (available.length === 1) {
          conditions.push(where('available', '==', available[0]));
        }

        // Build query – you can also add limit() for pagination
        const q = conditions.length
          ? query(productsRef, ...conditions, limit(50)) // limit optional
          : query(productsRef, limit(50));

        const snapshot = await getDocs(q);
        const items = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(items);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [categoryFromURL, category, size, color, available, priceRange]);

  // 🔎 Firestore can't do full text search; still filter locally if needed
  const filteredProducts = products.filter((product) => {
    const matchesSearch = searchFromURL
      ? product.title?.toLowerCase().includes(searchFromURL) ||
        product.description?.toLowerCase().includes(searchFromURL)
      : true;

    return matchesSearch;
  });

  const title =
    categoryFromURL ||
    (searchFromURL ? `Results for "${searchFromURL}"` : 'All Products');

  if (loading) {
    return <p className="text-center p-8">Loading products...</p>;
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="flex flex-wrap gap-2 p-4">
        <Link
          to="/"
          className="text-[#757575] text-base font-medium hover:text-[#0c77f2] transition"
        >
          Home
        </Link>
        <span className="text-[#757575] text-base font-medium">/</span>
        <span className="text-[#141414] text-base font-medium">{title}</span>
      </div>

      {/* Page Title */}
      <div className="flex items-center gap-3">
        <p className="text-[#141414] text-[32px] font-bold">{title}</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="h-full">
              <div className="flex flex-col h-full gap-3 pb-3 group shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-lg bg-[#FFD9AD]">
                {/* Product image */}
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={product.coverImage || product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Product info */}
                <div className="px-3 pb-4 flex flex-col justify-between h-[130px]">
                  <div className="min-h-[60px] overflow-hidden">
                    <p className="text-[#141414] text-base font-medium line-clamp-2">
                      {product.title}
                    </p>
                    <p className="text-[#757575] text-sm font-normal mt-1">
                      PKR {product.price}
                    </p>
                  </div>
                  <button className="mt-auto py-2 px-1 rounded-full bg-[#FFBF78] text-white text-sm font-semibold shadow-md hover:bg-gray-900 transition-all duration-200">
                    Buy Now
                  </button>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-[#757575] text-lg font-medium">
            No products found.
          </p>
        )}
      </div>
    </>
  );
}

export default ProductGrid;
