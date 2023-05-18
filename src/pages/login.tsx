import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

interface LoginFormData {
  username: string;
  password: string;
}

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { formState, control, handleSubmit, errors, register } =
    useForm<LoginFormData>();

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
        <input {...register("username", { required: true })} />
        {errors.username && <p style="color: red">{errors.username}</p>}

        <input {...register("password", { required: true })} />
        {errors.password && <p style="color: red">{errors.password}</p>}

        <button type="submit">Login</button>
      </form>
      <p>
        Don&amp;t have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
