import {addDoc, collection} from 'firebase/firestore'
import { db } from '../firebaseSdk'

const createCard = (data, urlImg) => {


   return { ...data, img: urlImg}
 }

const addProduct = async (data, urlImg) => {
    const card =   createCard(data, urlImg)
    const response = await addDoc(collection(db, 'product') ,card)

}

export  default addProduct