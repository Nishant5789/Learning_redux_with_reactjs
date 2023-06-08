import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const data = useSelector((state) => state);
  console.log(data.allProducts.products);
  const productArray = data.allProducts.products;

  return (
    <div>
      <div className="grid grid-cols-4 gap-3 p-4">
        {productArray.map((currProduct) => {
          const {id, title, price, description, category, image} = currProduct

          return (
            <div className="border-2 border-cyan-600 p-4" id={id}>
              <Link to={`/product/${id}`}>
              <div>
                <img src={image} className="h-52" alt="" />
              </div>
              <div>
                <h1 className="font-bold ">{title}</h1>
                <p>$ {price}</p>
                <p>{category}</p>
              </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductComponent;
