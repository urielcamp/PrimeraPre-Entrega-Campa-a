import CardProduct from '../CardProduct/CardProduct';


import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import {db} from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const BooksGenre = () => {
  const [booksDataByGenre, setBooksByGenre] = useState([]);

  const {genre} = useParams();

  console.log(booksDataByGenre);

  useEffect(() => {
    const getBookByGenre = async () =>{
        const q = query(collection(db, "Books"),where("genre", "==", genre));
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            docs.push({ ...doc.data(), id: doc.id});
        });
        setBooksByGenre(docs);
    };
    getBookByGenre();
}, [genre]);

  return (
    <div className="divICCard">
                { booksDataByGenre.map((Book)  => {
                    return(
                        <CardProduct book={Book} key={Book.id}/>
                        
                    )
                })}
            </div>
  )
}

export default BooksGenre