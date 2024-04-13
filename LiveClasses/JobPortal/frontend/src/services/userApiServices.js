const URI = "http://localhost:5000/api/v1";

const loginApi = async (email, password) => {
    try {
        const res = await fetch(`${URI}/users/login`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        console.log(data);
        return data; // data.user gives the user object
    } catch (error) {
        console.log(error);
    }
};

// loginApi("one@gmail.com", "123456");

const registerApi = async (username, email, password, role) => {
    try {
        const res = await fetch(`${URI}/users/register`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ username, email, password, role }),
        });
        if (!res.ok) {
            throw new Error(
                JSON.stringify({
                    message: "Failed to create an account",
                    err: res,
                })
            );
        }
        const data = await res.json();
        console.log("data in api =>", data);
        return data;
    } catch (error) {
        console.log("errors in api req => ", JSON.parse(error));
    }
};

// registerApi("five", "five@gmail.com", "password", "9000012345");

export { loginApi, registerApi };
