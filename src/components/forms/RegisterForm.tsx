import { Link } from "react-router-dom";
import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from "../../utils/styles";
import styles from "./index.module.scss";

export const RegisterForm = () => {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField type="email" id="email" />
      </InputContainer>
      <section className={styles.nameField}>
        <InputContainer className={styles.input}>
          <InputLabel htmlFor="firstname">Firstname</InputLabel>
          <InputField type="text" id="firstname" />
        </InputContainer>
        <InputContainer className={styles.input}>
          <InputLabel htmlFor="lastname">Lastname</InputLabel>
          <InputField type="text" id="lastname" />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField type="password" id="password" />
      </InputContainer>
      <Button className={styles.button}>Create My Account</Button>
      <div className={styles.existingUser}>
        <span>Already have an account ?</span>
        <Link to="/login"> login</Link>
      </div>
    </form>
  );
};
