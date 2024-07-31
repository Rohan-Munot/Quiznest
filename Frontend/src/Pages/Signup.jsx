import {MemoizedAdminUserLogin} from "../Components/AdminUserLogin.jsx";
import {MemoizedButton} from "../Components/Button.jsx";
import {MemoizedHeading} from "../Components/Heading.jsx";
import {useNavigate} from "react-router-dom";
import styles from '../CSS/Frame.module.css';
import {useFormik} from "formik";
import axios from "axios";
import {MemoizedLogo} from "../Components/Logo.jsx";
import {MemoizedBottomWarning} from "../Components/BottomWarning.jsx";
import {MemoizedInputBox} from "../Components/InputBox.jsx";

export function Signup () {
    const navigate = useNavigate();
    const formik = useFormik({
        enableReinitialize: false,
        initialValues: {
            fullname: "",
            username: "",
            password: "",
            confirmPassword: ""
        },
        validate: values => {
            const errors = {};
            if (!values.fullname || values.fullname.length < 3) {
                errors.fullname = "Full name is required and must be at least 3 characters";
            }else if (!/^[a-zA-Z ]+$/.test(values.fullname)) {
                errors.fullname = "Only letters and spaces allowed";
            }
            if (!values.username) {
                errors.username = "Email ID is required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)) {
                errors.username = "Invalid email address";
            }
            if (!values.password) {
                errors.password = "Password is required";
            } else if (values.password.length < 6) {
                errors.password = "Password must be at least 6 characters";
            }
            if (!values.confirmPassword) {
                errors.confirmPassword = "Confirm password is required";
            } else if (values.confirmPassword !== values.password) {
                errors.confirmPassword = "Passwords do not match";
            }
            return errors;
        },
        onSubmit: async (values) => {
            const response = await axios.post("http://localhost:3000/admin/signup", {
                fullname: values.fullname,
                username: values.username,
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
                        <MemoizedInputBox id={'fullname'} name={'fullname'} label={'Your Name'} placeholder={'Enter your full name'} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fullname} error={formik.touched.fullname && formik.errors.fullname}/>
                        <MemoizedInputBox id={'username'} name={'username'} label={'Email ID'} placeholder={'Enter your email address'} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} error={formik.touched.username && formik.errors.username}/>
                        <MemoizedInputBox id={'password'} name={'password'} label={'Password'} placeholder={'Enter your password (min 6 characters)'} type={'password'} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} error={formik.touched.password && formik.errors.password}/>
                        <MemoizedInputBox id ={'confirmPassword'} name={'confirmPassword'} label={'Confirm Password'} placeholder={'Re enter your password'} type={'password'} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} error={formik.touched.confirmPassword && formik.errors.confirmPassword}/>
                    </div>
                    <div className={styles.primaryButtonParent}>
                        <MemoizedButton label={'Register'} />
                        <MemoizedBottomWarning to={'/signin'} label={'Already have an account?'} buttonText={'Login now'}/>
                    </div>
                </div>
            </form>
        </div>
    )
}



