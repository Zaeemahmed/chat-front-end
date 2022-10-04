import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { postRegisterAsync } from "../../utils/api";
import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from "../../utils/styles";
import { createUserParams } from "../../utils/types";
import styles from "./index.module.scss";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserParams>();
  const onSubmit = async (data: createUserParams) => {
    try {
      await postRegisterAsync(data);
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
          {...register("email", { required: "Email is required" })}
        />
      </InputContainer>
      <section className={styles.nameField}>
        <InputContainer className={styles.input}>
          <InputLabel htmlFor="firstname">Firstname</InputLabel>
          <InputField
            type="text"
            id="firstname"
            {...register("firstName", { required: "Firstname is required" })}
          />
        </InputContainer>
        <InputContainer className={styles.input}>
          <InputLabel htmlFor="lastname">Lastname</InputLabel>
          <InputField
            type="text"
            id="lastname"
            {...register("lastName", { required: "Lastname is required" })}
          />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField
          type="password"
          id="password"
          {...register("password", { required: "Password is required" })}
        />
      </InputContainer>
      <Button className={styles.button}>Create My Account</Button>
      <div className={styles.existingUser}>
        <span>Already have an account ?</span>
        <Link to="/login"> login</Link>
      </div>
    </form>
  );
};
