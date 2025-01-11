import React, { useContext } from 'react';
import MyInput from '../components/ui/input/MyInput';
import MyButton from '../components/ui/button/MyButton';
import { AuthContext } from '../context';

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem("auth", "true")
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Enter login" />
                <MyInput type="password" placeholder="Enter password" />
                <MyButton>Log In</MyButton>
            </form>
        </div>
    );
}

export default Login;