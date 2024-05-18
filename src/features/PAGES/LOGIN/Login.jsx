import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { getLoginData } from "./LoginSlice"
import { useNavigate } from "react-router-dom"

function Login() {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.login.token)
    console.log({token});
    const navigate = useNavigate()
   

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate: (values) => {
            let error = {}
            if (!values.username) {
                error.username = 'Please enter username'
            }
            if (!values.password) {
                error.password = 'Please enter password'
            }
            return error
        },
        onSubmit: (values) => {
            console.log(values);
            dispatch(getLoginData(values))
        },
        onChange: (values) => {
            let obj = {}
            obj[values.target.name] = values.target.value
            // console.log(obj);
        }
    })
    

    return (
        <>
            <h1>Login</h1>
            <form method="post" onSubmit={formik?.handleSubmit}>
                <div>
                    <input type="text"
                        name="username"
                        placeholder="username"
                        value={formik?.values?.username}
                        onChange={formik.handleChange}
                    />
                    {formik?.errors?.username && <p className="error">{formik?.errors?.username}</p>}
                </div>
                <div>
                    <input type="password"
                        name="password"
                        placeholder="password"
                        value={formik?.values?.password}
                        onChange={formik.handleChange}
                    />
                    {formik?.errors?.password && <p className="error">{formik?.errors?.password}</p>}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Login