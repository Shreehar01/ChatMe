import React, {useContext, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {auth} from '../components/firebase';

const AuthContext = React.createContext();  // Creating a context

export const useAuth = () => useContext(AuthContext); // Function to use later on to grab the context.

export const AuthProvider = ({children}) => {
    // Setting the states
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const history = useHistory();

    // Grabbing the user from the firebase
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            setUser(user);
            setLoading(false);
            if (user) history.push('/chats');  // React router dom to push our application to chats
        })
    }, [user, history]);

    const value = {user};

    return(
        <AuthContext.Provider value = {value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}