import { doc, getDoc } from "firebase/firestore";
import {db} from './firebaseSdk'
import {useEffect, useState} from 'react'

const useDocCardDetail = (id) => {
    const [dataCard, setDataCard] = useState({})

    const fetchData = async () => {
        const docRef= doc(db,'product', id )
        
        try{
           const response = await getDoc(docRef)
           const data = response.data()
           setDataCard(data)
        }
        catch(error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchData();

    }, []);
  

    return { dataCard}
}

export default useDocCardDetail
