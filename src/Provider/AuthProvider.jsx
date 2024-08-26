import { createContext, useEffect, useState } from "react";
import { signOut,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword  } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] =useState(true);
    const [success,setSuccess]= useState();
    const [showPassword,setShowPassword]= useState(false);
    const [registerError,setRegisterError] =useState('');
     
    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const singInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    
     
    const authInfo ={
        user,
        loading,
        success,
        createUser,
        singInUser,
        logOut,
        showPassword,
        setShowPassword,
        setSuccess,
        registerError,
        setRegisterError
    }
      return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;