import { uploadImg} from "./uploadImg";
import addProduct from  "./addDoc";

const cardData = async (data) => {
    const urlImg = await uploadImg(data)
    const {imagen, ...dataWithoutImagen} = data

    const addResponse = await addProduct(dataWithoutImagen, urlImg)
  };
export default cardData