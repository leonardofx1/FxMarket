import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseSdk";
import { useState, useEffect } from "react";
import useAuthStore from "../../store/authStore";

const useIsAdmin = () => {
  const { user } = useAuthStore((state) => ({ user: state.user }));
  const [isAdmin, setIsAdmin] = useState(null); 

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (user) {
        const uid = user.uid;
        const adminDocRef = doc(db, "admin", uid);

        try {
          const docSnap = await getDoc(adminDocRef);
          if (docSnap.exists()) {
            setIsAdmin(true);
        
          } else {
            setIsAdmin(false);
          }
        } catch (e) {
          console.error("Erro ao verificar o status de admin:", e);
        }
      } 
    };

    checkAdminStatus();
  }, [user]);

  return isAdmin;
};

export default useIsAdmin;
