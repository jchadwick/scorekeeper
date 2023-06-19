import { Label, TextInput } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

interface LoginFormData {
  username: string;
  password: string;
}

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const {
    formState: { errors },
    control,
    handleSubmit,
    register,
  } = useForm<LoginFormData>();

  const handleSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formState.isValid) {
      return;
    }

    // TODO: Send the username and password to the backend to authenticate the user
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmitHandler}>
        <button type="submit">Login</button>
      </form>
      <p>
        Don&amp;t have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

const FormField = () => {
  return (
    <>
      <div className="mb-2 block">
        <Label htmlFor="password" color="failure" value="Password" />
      </div>
      <TextInput
        required={true}
        color={errors.password?.message ? "failure" : ""}
        helperText={errors.password?.message}
        {...register("password", { required: true })}
      />
    </>
  );
};

export default Login;
