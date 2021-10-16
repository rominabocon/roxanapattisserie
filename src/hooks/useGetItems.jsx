import {useEffect, useState} from 'react'
import {collection, onSnapshot} from '@firebase/firestore'
import db from "../firebase/firebase.jsx"


export const useGetItems = (id = 0, description= "") => {
    const [productos, setProductos] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setloading(true);
        onSnapshot(collection(db, "ItemCollection"), async (snapshot) => {
    const filteredProducts= await snapshot.docs.map((item) => ({
        ...item.data(),
            id: item.id,
            }));    
        if(id===0) {
                if (description){
                    setProductos(filteredProducts.filter(item => item.description === description))
                }else {
                    setProductos(filteredProducts);
                }
        }else {
            
            setProductos(filteredProducts.find(item => item.id === id))
        }
        setloading(false);
        });
    }, [id]);

    return {
        loading,
        productos
    }
}
