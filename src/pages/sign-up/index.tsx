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
import { register } from "@/supabase/auth";
import { toast } from "react-toastify";

function SignUp() {
  const { t } = useTranslation();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });

  const onSubmit = (data: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    const { email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      toast.error(t("passwords-dont-match"));
      return;
    }

    handleRegister({ email, password });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-card">
      <div className="w-full max-w-md rounded border-2 bg-card p-8 shadow">
        <div className="mb-8 flex flex-col items-center justify-center text-primary-foreground">
          <h1 className="mb-4 text-center text-2xl font-bold">
            {t("sign-up-title")}
          </h1>
          <p>{t("sign-up-subtitle")}</p>
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

            {/* Confirm Password Field */}
            <FormField
              name="confirmPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("confirm-password")}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={t("confirm-password-placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full rounded-2xl bg-primary">
              {t("sign-up")}
            </Button>
          </form>
        </Form>

        {/* Link to Login */}
        <p className="mt-4 text-center text-sm text-primary-foreground">
          {t("already-have-account")}{" "}
          <a href="/login" className="text-primary">
            {t("sign-in")}
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
