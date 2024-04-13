import { useState } from "react";
import styled from "styled-components";
import { useUser } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

const Row = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    align-items: center;
    & > label {
        font-weight: bold;
        font-size: large;
    }
    & > input {
        height: 20px;
        width: 200px;
        border: 2px solid black;
    }
`;

function Login() {
    const { login, isLoading, errors } = useUser();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Loggin data", formData);
        login(formData.email, formData.password)
            .then((data) => {
                if (data.success) {
                    toast.success("Logged in sucessfully");
                    navigate("/dashboard");
                    localStorage.setItem("token", data.session.accessToken);
                }
            })
            .catch((err) => {
                console.log(err);
                localStorage.setItem("token", "");
            });
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <label htmlFor="email">email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                </Row>
                <Row>
                    <label htmlFor="password">password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
                    />
                </Row>
                <button type="submit">Login</button>
            </Form>
        </div>
    );
}

export default Login;
