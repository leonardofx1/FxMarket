import {addDoc, collection} from 'firebase/firestore'
import { db } from '../firebaseSdk'

const createCard = (data, urlImg) => {


   return { ...data, img: urlImg}
 }

const addProduct = async (data, urlImg) => {
    const card =   createCard(data, urlImg)
    const subCollection = card.subCollection
    const productCollection = await addDoc(collection(db, 'product') ,card)
    const topicosCollection = await addDoc(collection(db, subCollection) ,card)
}

export  default addProduct