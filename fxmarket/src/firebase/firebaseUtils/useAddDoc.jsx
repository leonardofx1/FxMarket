import {addDoc, collection} from 'firebase/firestore'
import { db } from '../firebaseSdk'



const addProduct = async () => {


    const response = await addDoc(collection(db, 'product') ,{
        name:'leonardo'})

}

export  default addProduct