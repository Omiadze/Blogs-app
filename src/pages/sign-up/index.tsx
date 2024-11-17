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
import { Link } from "react-router-dom";

function SignUp() {
  const { t } = useTranslation();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: unknown) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md rounded border-2 bg-white p-8 shadow dark:border-white dark:bg-gray-900 dark:text-white">
        <div className="mb-8 flex flex-col items-center justify-center">
          <h1 className="mb-4 text-center text-2xl font-bold">
            {t("sign-up-title")}
          </h1>
          <p>{t("sign-up-subtitle")}</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
            <Button
              type="submit"
              className="w-full rounded-2xl bg-blue-700 text-white dark:bg-blue-700 dark:text-white"
            >
              {t("sign-up")}
            </Button>
          </form>
        </Form>
        <p className="mt-4 text-center text-sm">
          {t("already-have-account")}{" "}
          <Link to={"/login"} className="text-blue-700">
            {t("sign-in")}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
