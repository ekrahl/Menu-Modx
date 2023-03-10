import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

const SignUp = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // const url = "http://localhost:8080/api/users"
            const url = "https://us-east-1.aws.data.mongodb-api.com/app/data-jfitc/endpoint/data/v1"
            const { data: res } = await axios.post(url, data)
            navigate("/login")
            console.log(res.message)

        } catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }
        }
    }

    return (
        <div className="mt-24 mx-3 h-screen">
            <div className="flex flex-col justify-center dark:text-gray-200 text-slate-900">
                <div className="flex justify-center font-semibold text-2xl md:text-6xl">
                    <h1>MenuModx</h1>
                </div>
                <div className="flex flex-col mt-10 mx-auto">
                    <h1 className="flex justify-center text-xl m-4">Welcome Back</h1>
                    <Link to='/login'>
                        <button
                            type="button"
                            className="text-gray-200 border border-gray-400 hover:shadow-2xl rounded-lg bg-slate-900 p-2 w-full">
                            Sign In
                        </button>
                    </Link>
                </div>
                <div className="flex justify-center mt-10">
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <h1 className="flex justify-center text-xl m-2 p-2">Create Account</h1>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className="text-slate-900 border border-gray-800 rounded-lg m-2 p-2 w-80"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className="text-slate-900 border border-gray-800 rounded-lg m-2 p-2 w-80"
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className="text-slate-900 border border-gray-800 rounded-lg m-2 p-2 w-80"
                        />
                        <input
                            type="text"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className="text-slate-900 border border-gray-800 rounded-lg m-2 p-2 w-80"
                        />
                        {error && <div className="">{error}</div>}
                        <button type="submit" className="text-gray-200 border border-gray-400 hover:shadow-2xl rounded-lg bg-slate-900 m-2 p-2">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp