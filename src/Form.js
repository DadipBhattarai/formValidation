import { Input, makeStyles, InputLabel, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles({
  formInput: {
    border: "1px solid #000",
    marginBottom: "10px",
    width: "50%",
    paddingLeft: "10px",
    height: "50px",
  },
  buttonStyle: {
    display: "block",
    marginTop: "10px",
  },
});

const Form = () => {
  const classes = useStyles();

  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const [formErrors, setFormErrors] = useState({});

  const handleInputfName = (e) => {
    const firstName = e.target.value;
    setFname(firstName);
  };
  const handleInputlName = (e) => {
    const lastName = e.target.value;
    setLname(lastName);
  };
  const handleInputEmail = (e) => {
    const Email = e.target.value;
    setEmail(Email);
  };
  const handleInputPassword = (e) => {
    const Password = e.target.value;
    setPassword(Password);
  };
  const handleInputConfirmPassword = (e) => {
    const confirmPass = e.target.value;
    setConfPass(confirmPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(fName));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const reges = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.fName) {
      errors.fName = "First Name is Required!";
    }
    if (!values.fName) {
      errors.fName = "First Name is Required!";
    }
    if (!values.lName) {
      errors.lName = "Last Name is Required!";
    }
    if (!values.email) {
      errors.email = "Email is Required!";
    } else if (!reges.test(values.email)) {
      errors.email("this is not a valid email");
    }
    if (!values.password) {
      errors.password = "Password is Required!";
    } else if (values.password.length < 6) {
      errors.password("Password must be more than 6");
    } else if (values.password.length > 10) {
      errors.password("Password less than 10");
    }
    if (!values.confPass) {
      errors.confPass = "Confirmation Password is Required!";
    }
    return errors;
  };

  return (
    <div>
      <pre>
        {JSON.stringify(
          { fName, lName, email, password, confPass },
          undefined,
          2
        )}
      </pre>
      <form onSubmit={handleSubmit}>
        <InputLabel>First Name*</InputLabel>
        <Input
          disableUnderline
          placeholder="Enter the First Name"
          className={classes.formInput}
          onChange={handleInputfName}
          value={fName}
        />
        <p>{formErrors.fName}</p>
        <InputLabel>Last Name*</InputLabel>
        <Input
          disableUnderline
          placeholder="Enter the Last Name"
          className={classes.formInput}
          value={lName}
          onChange={handleInputlName}
          required
        />
        <p>{formErrors.lName}</p>

        <InputLabel>Email*</InputLabel>
        <Input
          type="email"
          disableUnderline
          placeholder="Enter the Email"
          value={email}
          className={classes.formInput}
          onChange={handleInputEmail}
          required
        />
        <p>{formErrors.email}</p>

        <InputLabel>Password*</InputLabel>
        <Input
          type="password"
          disableUnderline
          placeholder="Enter the Password"
          className={classes.formInput}
          onChange={handleInputPassword}
          value={password}
          required
        />
        <p>{formErrors.password}</p>

        <InputLabel>Confirm Password*</InputLabel>
        <Input
          type="password"
          disableUnderline
          placeholder="Enter the Confirm Password"
          className={classes.formInput}
          onChange={handleInputConfirmPassword}
          value={confPass}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.buttonStyle}
        >
          Create Account
        </Button>
        <p>Conf: {confPass}</p>
      </form>
    </div>
  );
};

export default Form;
