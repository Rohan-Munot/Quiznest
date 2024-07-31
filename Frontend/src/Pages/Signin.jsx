import styles from "./Frame.module.css";
import {MemoizedLogo} from "../Components/Logo.jsx";
import {MemoizedHeading} from "../Components/Heading.jsx";
import {MemoizedAdminUserLogin} from "../Components/AdminUserLogin.jsx";
import {MemoizedInputBox} from "../Components/InputBox.jsx";
import {MemoizedButton} from "../Components/Button.jsx";
import axios from "axios";
import {MemoizedBottomWarning} from "../Components/BottomWarning.jsx";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";

export function Signin() {
    const navigate = useNavigate();
    const formik = useFormik({
        enableReinitialize: false,
        initialValues: {
            email: "",
            password: ""
        },
        validate: values => {
            const errors = {};
            if (!values.email) {
                errors.email = "Email ID is required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            if (!values.password) {
                errors.password = "Password is required";
            }
            return errors;
        },
        onSubmit: async (values) => {
            const response = await axios.post("http://localhost:3000/admin/signin", {
                username: values.email,
                password: values.password
            })
            localStorage.setItem("token", response.data.token)
            navigate('/dashboard')
        }
    });
    return (
        <div className={styles.main}>
            <form onSubmit={formik.handleSubmit} className={styles.frameParent}>
                <div className={styles.frameGroup}>
                    <div className={styles.logoParent}>
                        <MemoizedLogo className={styles.logoIcon}/>
                        <MemoizedHeading/>
                    </div>
                    <div className={styles.frameParent1}>
                        <MemoizedAdminUserLogin/>
                    </div>
                </div>
                <div className={styles.frameParent1}>
                    <div className={styles.inputFieldsParent}>
                        <MemoizedInputBox id={'email'} name={'email'} label={'Email ID'} placeholder={'Enter your email address'} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} error={formik.touched.email && formik.errors.email}/>
                        <MemoizedInputBox id={'password'} name={'password'} label={'Password'} placeholder={'Enter your password (min 6 characters)'} type={'password'} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} error={formik.touched.password && formik.errors.password}/>
                    </div>
                    <div className={styles.primaryButtonParent}>
                        <MemoizedButton label={'Login'} />
                        <MemoizedBottomWarning to={'/signup'} label={"Don't have an account?"} buttonText={'Signup now'}/>
                    </div>
                </div>
            </form>
        </div>
    )
}