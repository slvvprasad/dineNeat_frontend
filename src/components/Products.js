// import React from "react";
// import Itemcard from "./Itemcard";
// import data from "./data";

// const Products =() => {
//     return(
//     <div><br></br><br></br><br></br>
//        <h1 className="text-center mt-3">The Menu</h1> 
//         <section className="py-4 container">
//             <div className="row justify-content-center">
//                 {data.productData.map((item,index)=>{
//                     return(
//                         <Itemcard 
//                         img={item.img} 
//                         title={item.title} 
//                         desc={item.desc} 
//                         price={item.price} 
//                         item={item} 
//                         key={index} 
//                         />
//                     )
//                 })}
                
//             </div>
//         </section>
//     </div>
//     );
// }

// export default Products;

import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import Itemcard from "./Itemcard";
import data from "./data";

const Products = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [text, setText] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date._d);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };


  return (
    <div><br></br><br></br><br></br><br></br><br></br>
    <h5>Select Your Date & Time of Visit </h5>
         <Datetime value={selectedDate} onChange={handleDateChange} /><br></br>
         <h5>Enter number of guests</h5>
         <input type="text" value={text} onChange={handleTextChange} />
      <h1 className="text-center mt-3">The Menu</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
         
          {data.productData.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Products;
