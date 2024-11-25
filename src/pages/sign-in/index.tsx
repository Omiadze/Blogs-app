import { useTranslation } from "react-i18next";
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
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { login } from "@/supabase/auth";
import { toast } from "react-toastify";

function SignIn() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: (data) => {
      console.log("User signed in:", data);
    },
    onError: (error) => {
      toast.error(error.message || t("login-failed"));
    },
  });

  const onSubmit = (data: { email: string; password: string }) => {
    const { email, password } = data;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error(t("invalid-email"));
      return;
    }

    // Ensure password is provided
    if (!password) {
      toast.error(t("password-required"));
      return;
    }

    handleLogin({ email, password });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-card">
      <div className="w-full max-w-md rounded border-2 bg-card p-8 shadow">
        <div className="mb-8 flex flex-col items-center justify-center text-primary-foreground">
          <h1 className="mb-4 text-center text-2xl font-bold">
            {t("sign-in-title")}
          </h1>
          <p>{t("sign-in-subtitle")}</p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 text-muted-foreground"
          >
            {/* Email Field */}
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("email")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("email-placeholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("password")}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={t("password-placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full rounded-2xl bg-primary"
              onClick={() => navigate("/home")}
            >
              {t("sign-in")}
            </Button>
          </form>
        </Form>

        {/* Link to Register */}
        <p className="mt-4 text-center text-sm text-primary-foreground">
          {t("no-account")}{" "}
          <Link to={"/register"} className="text-primary">
            {t("sign-up")}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
