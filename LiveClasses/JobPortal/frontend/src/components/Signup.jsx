import { useState } from "react";
import styled from "styled-components";
import { registerApi } from "../services/userApiServices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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

const initialState = {
    username: "",
    email: "",
    password: "",
    role: "",
};

function Signup() {
    const [formData, setFormDate] = useState(initialState);
    const [errors, setErrors] = useState();
    const navigate = useNavigate();

    function handleChange(e) {
        if (e.target.name === "") return;
        setFormDate({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        registerApi(
            formData.username,
            formData.email,
            formData.password,
            formData.role
        )
            .then((res) => {
                if (res.success) {
                    toast.success("user created sucessfully");
                    navigate("/login");
                }
            })
            .catch((err) => {
                console.log("errors => ", err);
                if (typeof err === "string") setErrors(err.message);
                toast.error(err.message);
            });
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </Row>
                <Row>
                    <label htmlFor="email">email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Row>
                <Row>
                    <label htmlFor="password">password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </Row>
                <Row>
                    <label htmlFor="role">role:</label>
                    <select
                        value={formData.role}
                        onChange={(e) =>
                            setFormDate({ ...formData, role: e.target.value })
                        }
                    >
                        <option value="">Select Role</option>
                        <option value="candidate">Candiate</option>
                        <option value="recruiter">Recuiter</option>
                    </select>
                </Row>
                <button type="submit">Register</button>
            </Form>
        </div>
    );
}

export default Signup;
