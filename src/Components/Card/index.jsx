import React from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);
  //const { count, setCount, openProductDetail, setProductToShow, cartProducts,setCartProducts} = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
    context.closeCheckoutSideMenu();
  };

  const addProductToCart = (event, productData) => {
    event.stopPropagation(); // evita que el evento se propague hacia los elementos padres
    context.setCount(context.count + 1);
    productData.quantity = 1  // se crea la prop quantity a productData
    context.setCartProducts([...context.cartProducts, productData]);
    context.closeProductDetail();
    context.openCheckoutSideMenu();
  };

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.some((product) => product.id === id);

    if (isInCart) {
      return (
        <button className="absolute top-0 right-0 flex justify-center items-center bg-green-500/85  text-black w-6 h-6 m-2 p-1 rounded-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 m-2 p-1 hover:bg-green-400/85 rounded-full font-bold"
          onClick={(event) => addProductToCart(event, data.data)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      );
    }
  };

  return (
    <div
      className="flex flex-col justify-around bg-white p-2 cursor-pointer w-100 h-100 rounded-2xl shadow-lg overflow-hidden
      transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-sm"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-3/4">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data?.category?.name}
        </span>
        <img
          className="w-full h-full object-contain rounded-lg"
          src={data.data?.image}
          alt={data.data?.title}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex flex-col justify-between items-start overflow-hidden">
        <span className="text-sm font-light line-clamp-2">{data.data?.title}</span>
        <span className="text-lg font-medium pt-1">${data.data?.price}</span>
      </p>
    </div>
  );
};

export default Card;
