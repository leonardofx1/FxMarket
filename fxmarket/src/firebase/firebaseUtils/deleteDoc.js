import {doc, deleteDoc } from 'firebase/firestore'
import { db } from './firebaseSdk'


const deleteDocCard =async (id) => {
    const deleteCard = await deleteDoc(doc(db, "product", id ))
}

export default deleteDocCard