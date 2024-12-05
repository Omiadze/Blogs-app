import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LoginDefaultValues } from "../login-default-values";
import { FormValues } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "./schema";
import { Label } from "@radix-ui/react-label";

const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: LoginDefaultValues,
  });

  const onSubmit = (values: FormValues) => {
    const { email, password } = values;
    alert("login successfully");
    console.log(email, password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* მეილი */}
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="email">Email</Label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input id="email" type="email" placeholder="Email" {...field} />
          )}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      {/* პაროლი */}
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="password">Password</Label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              id="password"
              type="password"
              placeholder="Password"
              {...field}
            />
          )}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>
      {/*დალოგინება/რეგისტრაციაზე გადასვლა */}
      <div className="mt-4 flex justify-between">
        <Button type="submit" variant="outline">
          Log In
        </Button>
        <Button variant="link">
          <Link to="/signup">Sign Up</Link>
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
