import { useContext } from "react";

import { ProductsContext } from "../../contexts/ProductsContext";

import Card from "../Card/Card";

import "./ListProducts.css";

export default function ListProducts () {
   
const productsContext = useContext(ProductsContext);

return(<div className="card_holder">
    {productsContext.products.map(x => <Card key={x._id} {...x}  />)}
</div> );

}