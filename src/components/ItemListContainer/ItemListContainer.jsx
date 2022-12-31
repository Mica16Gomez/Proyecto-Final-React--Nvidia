import "./ItemListContainer.css";
 import { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import LoadingWidget from "../LoadingWidget/LoadingWidget";
import { getProducts , products } from "../../services/firebase/firestore";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { useAsync } from "../../hooks/useAsync";
import PageNotFound from "../PageNotFound/PageNotFound";
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase/index'

// Aquí estamos recibiendo el Saludo de la Página por props
 const ItemListContainer = ({ welcomePage }) => {

  
   const [products, setProducts] = useState([]);
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(true);

   const { categoryId } = useParams();
      console.log(categoryId);

 
   useEffect(() => {
     setLoading(true);
     const productsRef = categoryId 
     ? query(collection(db, 'products'), where('category', '===', products))
     : query(collection(db, 'products'), orderBy('order'))


     getProducts(products)
       .then((products) => {
         setProducts(products);
       })
       .catch((error) => {
         console.log(error);
         setError(true);
     })
       .finally(() => {
         setLoading(false);
       });
  //   //Le indicamos que esta parte se tiene que ejecutar despues de que nuestro componente sea montado en pantalla y esto lo hacemos con []
   }, [products]); //Aqui le estamos diciendo que si el valor cambia vuelva a hacer la llamada

  // Nuestro componente ItemListContainer trae los parametros de la URL, hace una llamada asincrona y trae los productos. Finalmente, la respuesta la lista

  // const { categoryId } = useParams();

  // *** Mandamos a llamar nuestro "CustomHook" ***
  // Le pasamos una función de call back, es decir una funcion que se va a ejecutar adentro despues de ejecutar determinado codigo
 
  if (loading) {
    // return <h1>Loading...</h1>;
    return <LoadingWidget />;
  }

  if (error) {
    return <h1>Hubo un Error</h1>;
  }

  return (
    <>
      {Object.entries(products).length > 0 ? (
        <div className="ItemListContainer">
          <h1 className="ItemListTitle">{products}</h1>
          <ItemList products={products} />
        </div>
      ) : (
        <PageNotFound
          message={`No encontramos la categoría "${categoryId}"`}
        />
      )}
    </>
  );

   ;
  }

export default ItemListContainer;
