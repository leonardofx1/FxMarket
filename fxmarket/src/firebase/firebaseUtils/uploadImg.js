import addProduct from "./addDoc";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
export const uploadImg = async (data) => {
    const storage = getStorage()
    try {
        const storage = getStorage();
        const storageRef = ref(storage, "imagensProduct/" + data.imagen[0].name); 
        const uploadImg = await uploadBytes(storageRef, data.imagen[0]);
        return  getDownloadURL(storageRef)
      } catch (error) {
        console.error(error);
      }
}