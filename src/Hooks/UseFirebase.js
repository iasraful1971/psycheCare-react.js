import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationFirebaseAuthentication from "../Firebase/Firebase.init";

 initializationFirebaseAuthentication();




const useFirebase =() => {

    const [user , setUser] = useState({});
    const [error , setError]  =useState("");
    const [email , setEmail]  =useState("");
    const [password ,setPassword]  =useState("");
    const [success , setSuccess] =useState("");
    const [passError , setPassError]  = useState('');
    const [logSucess , setLogSuccess] = useState('');
    const [logerror , setLogError] = useState('');


    //handle uth
    const auth =getAuth()
    const gogleProv = new GoogleAuthProvider();
 
    // handle google
    const googleSignIn= () =>{
        signInWithPopup(auth ,gogleProv)
        .then(result => {
            setUser(result.user);
            setSuccess("succesfully you connected")
            setError(" ");
            
        })
        .catch(error => {
            setError("there is some errors try again")
        })
    } 

    //handle registation
    const handleForm =(e) => {
            e.preventDefault();
            createUser(email ,password)
            
    }
    const createUser =(email , password) => {
        createUserWithEmailAndPassword(auth , email ,password)
        .then(result => {
            setUser(result.user)
            setSuccess('successfully registerd');
            setError(' ');
            setPassError(" ");
        })
        .catch(error => {
            setError('email al ready used try another');
            setPassError('password shound be strong')
        })
    }

    //handle login form 
    const handleLogIn =(e) => {
        e.preventDefault();
        signInUser(email , password)
           
    }


const signInUser =(email , password) => {

    signInWithEmailAndPassword(auth ,email , password)
    .then(result => {
        setUser(result.user);
        console.log(result.user)
        setLogSuccess('successfully logged in.');
        setLogError(" ")
    })
    .catch(error => {
        setLogError('could not find the acoount');
    })
}



    //sign out
     const logout =()=>{
        signOut(auth)
        .then(() => {
            setUser({ })
        }) 
     }
    //manage user
    useEffect(() => {
            onAuthStateChanged(auth ,(user) => {
                if(user){
                    setUser(user)
                }
            })
    }, [])
    
    //handle email
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    //handle password
    const handlePassword = (e) => {
        setPassword(e.target.value)        
    }

    return{
            handleForm,
            handleLogIn,
            handleEmail ,
            handlePassword,
            error,
            user,
            success, 
            passError,
            logSucess,
            logerror,
            googleSignIn,
            logout,
            signInUser,
            createUser
    }
}
export default useFirebase;