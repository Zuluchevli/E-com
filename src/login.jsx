import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/login.css";
import { loginUser } from "./api/apiHandle";


export default function Login() {
    const navigator = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }
        let clint = await loginUser(email, password);
        let res = clint.data;
        if (res.length > 0) {
            alert("Login successful!");
            navigator("/");
        } else {
            alert("Invalid credentials.");
        }
        console.log({ email, password });
    };
    return (
        <>
            <div className="mainLogin">

                <div className="login-container">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}