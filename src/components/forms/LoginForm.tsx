import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from "../../utils/styles";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import { userLoginParams } from "../../utils/types";
import { postLoginAsync } from "../../utils/api";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userLoginParams>();
  const navigate = useNavigate();
  const onSubmit = async (data: userLoginParams) => {
    try {
      await postLoginAsync(data);
      navigate("/conversation");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField
          type="email"
          id="email"
          {...register("username", { required: "Email is required" })}
        />
      </InputContainer>
      <InputContainer className={styles.password}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField
          type="password"
          id="password"
          {...register("password", { required: "Password is required" })}
        />
      </InputContainer>
      <Button className={styles.button}>Login </Button>
      <div className={styles.nonexistingUser}>
        <span>Don't have an account ?</span>
        <Link to="/register"> Register</Link>
      </div>
    </form>
  );
};
