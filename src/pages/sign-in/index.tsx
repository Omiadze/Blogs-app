// import React from "react";
// import { Input } from "@/components/ui/input";

// const SignIn = () => {
//   return (
//     <div>
//       <h1>Log in to BitBlogs</h1>
//       <p>Enter your credentials to access your account</p>
//     </div>
//   );
// };

// export default SignIn;
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function SignIn() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: unknown) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 bg-white rounded shadow dark:border-white dark:bg-gray-900 dark:text-white border-2">
        <div className="flex flex-col justify-center items-center mb-8">
          <h1 className="text-2xl font-bold text-center mb-4 ">
            Log in to BitBlogs
          </h1>
          <p>Enter your credentials to access your account</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              variant="outline"
              type="submit"
              className="w-full  bg-blue-700 text-white rounded-2xl dark:bg-blue-700 dark:text-white"
            >
              Sign In
            </Button>
          </form>
        </Form>
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to={"/register"} className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
