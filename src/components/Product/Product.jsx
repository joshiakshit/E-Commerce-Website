import React, { useState } from "react";

const Product = () => {
  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7dd4ccf5-1588-47de-b000-c1f1db655a74/WMNS+AIR+JORDAN+1+MID.png",
    img2: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bd4cf472-051a-4699-964b-443b3364b2bb/WMNS+AIR+JORDAN+1+MID.png",
    img3: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/18f2fa2c-4cc1-46f3-89a5-4911414f9821/WMNS+AIR+JORDAN+1+MID.png",
    img4: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/246843d0-1250-4b7f-a1d8-974784043a18/WMNS+AIR+JORDAN+1+MID.png",
  });

  const [activeImg, setActiveImage] = useState(images.img1);
  const [amount, setAmount] = useState(1);

  return (
    <div className="flex flex-col lg:flex-row gap-16 p-4">
      {/* Left section: Images + FAQs */}
      <div className="flex flex-col gap-16 lg:w-2/5 ">
        {/* Main Image (Height Increased by 40%) */}
        <img   
          src={activeImg} 
          alt="Product" 
          className=" object-cover rounded-xl" 
      />
        <div className="flex flex-row justify-between h-24">
          <img
            src={images.img1}
            alt=""
            className="w-20 h-20 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-20 h-20 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-20 h-20 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-20 h-20 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img4)}
          />
        </div>

        {/* FAQs Section */}
        <div className="w-full mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          {/* FAQs List */}
          {[
            {
              question: "Are these shoes true to size?",
              answer:
                "Yes, they fit as expected. I recommend ordering your normal size.",
            },
            {
              question: "Can these shoes be worn in wet conditions?",
              answer:
                "These shoes are not waterproof, but the materials are water-resistant.",
            },
            {
              question: "What is the return policy for this product?",
              answer:
                "You can return the product within 30 days if it's unused and in the original packaging.",
            },
          ].map((faq, index) => (
            <div key={index} className="mb-3">
              <button className="w-full text-left bg-gray-100 p-3 rounded-lg">
                <h4 className="text-lg font-semibold">{faq.question}</h4>
              </button>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right section: Product Details + Add to Cart + Reviews */}
      <div className="flex flex-col gap-5 lg:w-1/3">
        <div>
          <span className="text-violet-600 font-semibold">Jordans</span>
          <h1 className="text-3xl font-bold">Nike Air Jordans 1 Mid</h1>
        </div>

        {/* Description of the Product */}
        <p className="text-gray-700">
          HERITAGE STYLE, PREMIUM COMFORT ON AND OFF THE COURT... The Air Jordan
          1 Mid brings full-court style and premium comfort to an iconic look.
          Its Air-Sole unit cushions play on the hardwood, while the padded
          collar gives you a supportive feel.
        </p>

        <h6 className="text-2xl font-semibold">₹11,496</h6>

        {/* Quantity and Add to Cart Button */}
        <div className="flex flex-row items-center gap-12 mt-4">
          <div className="flex flex-row items-center">
            <button
              className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg">{amount}</span>
            <button
              className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
            <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full">
              Add to cart
            </button>
          </div>
        </div>

        {/* Product Reviews Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
          {[
            {
              name: "John Doe",
              date: "October 15, 2023",
              rating: 4,
              comment:
                "Great shoes, comfortable and stylish! Would highly recommend.",
            },
            {
              name: "Jane Smith",
              date: "October 12, 2023",
              rating: 5,
              comment: "Amazing quality! These are my favorite sneakers now.",
            },
            {
              name: "David Brown",
              date: "October 5, 2023",
              rating: 3,
              comment:
                "Good, but a bit stiff at first. After breaking them in, they feel much better.",
            },
          ].map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
              <div className="flex justify-between">
                <div>
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-gray-500 text-sm">
                    {" "}
                    - {review.date}
                  </span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, starIndex) => (
                    <span
                      key={starIndex}
                      className={`text-yellow-500 ${
                        starIndex < review.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
