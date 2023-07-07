import { useParams } from 'react-router-dom';

import CardProduct from '../CardProduct/CardProduct';
import React, {useState, useEffect} from 'react'

import {db} from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const BooksState = () => {
const [booksDataByState, setBooksByState] = useState([]);

const {state} = useParams();

    useEffect(() => {
    const getBookByState = async () =>{
        const q = query(collection(db, "Books"),where("state", "==", state));
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            docs.push({ ...doc.data(), id: doc.id});
        });
        setBooksByState(docs);
    };
    getBookByState();
}, [state]);

return (
    <div className="divICCard">
        { booksDataByState.map((Book)  => {
            return(
                <CardProduct book={Book} key={Book.id}/>
                        
            )
        })}
    </div>
)
}

export default BooksState;