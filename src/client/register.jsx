import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/apiHandle";
import "../css/register.css";

export default function Register() {
    const navigator = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }
        registerUser({ username, email, password });
        alert("Registration successful!");
        navigator("/login");
        console.log({ username, email, password });
    };

    return (
        <>
            <div className="mainRegister">

                <div className="register-container">
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </>
    );
}
