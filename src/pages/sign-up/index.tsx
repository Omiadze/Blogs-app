import { useTranslation } from "react-i18next";
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
// } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/supabase/auth";
import { toast } from "react-toastify";

function SignUp() {
  const { t } = useTranslation();

  const { control, handleSubmit, formState } = useForm({
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
        <div className="flex flex-col items-center justify-center gap-4 text-muted-foreground">
          <label htmlFor="email">{t("email")}</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",

              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <div className="w-full">
                <Input
                  placeholder={t("email")}
                  onChange={onChange}
                  value={value}
                  className="border border-muted-foreground"
                />
                {formState.errors?.email && (
                  <p className="text-red-500">
                    {formState.errors?.email?.message}
                  </p>
                )}
              </div>
            )}
          />

          <label htmlFor="">{t("password")}</label>
          <Controller
            name="password"
            control={control}
            rules={{
              required: t("validation.password-required"),
              minLength: {
                value: 6,
                message: t("validation.password-min-length"),
              },
              maxLength: {
                value: 20,
                message: t("validation.password-max-length"),
              },
            }}
            render={({ field, fieldState }) => (
              <div className="w-full">
                <Input
                  {...field}
                  placeholder={t("password-placeholder")}
                  type="password"
                  className={`border ${
                    fieldState.error
                      ? "border-red-500"
                      : "border-muted-foreground"
                  }`}
                />
                {fieldState.error && (
                  <p className="text-sm text-red-500">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />
          <label htmlFor="">Password</label>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: t("validation.password-required"),
              minLength: {
                value: 6,
                message: t("validation.password-min-length"),
              },
              maxLength: {
                value: 20,
                message: t("validation.password-max-length"),
              },
            }}
            render={({ field, fieldState }) => (
              <div className="w-full">
                <Input
                  {...field}
                  placeholder={t("password-placeholder")}
                  type="password"
                  className={`max-w-full border ${
                    fieldState.error
                      ? "border-red-500"
                      : "border-muted-foreground"
                  }`}
                />
                {fieldState.error && (
                  <p className="text-sm text-red-500">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          {formState.errors?.password ? <span>savaldebuloa</span> : null}
          <Button
            className="w-full rounded-2xl bg-primary"
            onClick={handleSubmit(onSubmit)}
          >
            {t("sign-up")}
          </Button>
        </div>

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
