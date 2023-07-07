import React, {useState, useEffect} from 'react'
import ItemDetail from '../../DetailPage/ItemDetail'
import { Link, useParams } from 'react-router-dom';

import {db} from "../../../firebase/firebaseConfig";
import { collection, query, where, getDocs, documentId } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [bookData, setBook] = useState([]);

    const {id} = useParams();

    //console.log(bookData)

    useEffect(() => {
        const getBook = async () =>{
            const q = query(collection(db, "Books"),where(documentId(), "==", id));
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                docs.push({ ...doc.data(), id: doc.id});
            });
            setBook(docs);
        };
        getBook();
    }, [id]);

    return(
        <div>               
            <div className="divICCard">
                {bookData? bookData.map((Book)  => {
                    return(
                        <ItemDetail book={Book} key={Book.id}/>
                    )
                })
            :null }
            </div>
        </div>
    );
};

export default ItemDetailContainer;