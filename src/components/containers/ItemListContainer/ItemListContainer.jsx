//hooks
import { useState, useEffect } from "react";


// containers
import React from "react";
import './ItemListContainer.css'
import Categories from "../../Categories/Categories";
import CardProduct from "../../CardProduct/CardProduct";

//firebase
import {db} from "../../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";


const ItemListContainer = () => {
    const [Books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            const getBooks = async () =>{
                const q = query(collection(db, "Books"));
                const querySnapshot = await getDocs(q);
                const docs = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    //console.log(doc.id, " => ", doc.data());
                    docs.push({ ...doc.data(), id: doc.id});
                });
                setBooks(docs);
            };
            getBooks();
            setLoading(false);
    }, []);

    return(
        <article className="divICont">
            <div className="divICCate">
                <Categories/>
            </div>
            <div className="divICCard">
                {Books? Books.map((Book)  => {
                    return(
                        <CardProduct book={Book} key={Book.id}/>
                        
                    )
                })
            :null }
            </div>
        </article>
    );
};

export default ItemListContainer;