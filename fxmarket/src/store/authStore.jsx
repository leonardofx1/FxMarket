import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebase/firebaseUtils/firebaseSdk";

const provider = new GoogleAuthProvider();

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      signed: false,

      signInGoogle: async () => {
        const auth = getAuth(app);
        try {
          const credentialUser = await signInWithPopup(auth, provider)
          const credential = GoogleAuthProvider.credentialFromResult(credentialUser)
          const token = credential.accessToken
          const user = credentialUser.user
          set({ user, signed: true })
        } catch (error) {
          console.error("Erro ao fazer login com o Google:", error)
        }
      },
      signOut: () => {
        const auth = getAuth(app);
        auth.signOut();
        set({ user: null, signed: false })
      },
      createUser: async (email, password) => {
        const auth = getAuth()
        try {
          const responseUser = await createUserWithEmailAndPassword( auth, email,password )
          const user = responseUser.user
          set({ user, signed: true })
        } catch (error) {
          console.error('error ao criar uma nova conta', error)
        }
      },
    }),

    {
      name: "auth-store", // Nome para identificar a persistência
      whitelist: ["user", "signed"], // Estados que devem ser persistidos
    }
  )
);

export default useAuthStore;
