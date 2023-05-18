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
        <input {...register("username", { required: true })} />
        {errors.username && <p style="color: red">{errors.username}</p>}

        <div className="mb-2 block">
          <Label htmlFor="username4" color="failure" value="Your name" />
        </div>
        <TextInput
          placeholder="Bonnie Green"
          required={true}
          color={errors.password?.message ? "failure" : ""}
          helperText={errors.password?.message}
          {...register("password", { required: "This field is required" })}
        />

        <button type="submit">Login</button>
      </form>
      <p>
        Don&amp;t have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
