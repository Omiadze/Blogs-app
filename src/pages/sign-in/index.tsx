import { useTranslation } from "react-i18next";

import { Input } from "@components/ui/input";
// import { Button } from "@components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { login } from "@/supabase/auth";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";

type FormValues = {
  email: string;
  password: string;
};
function SignIn() {
  const { t } = useTranslation();
  // const navigate = useNavigate();

  const { control, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: { email: "", password: "" },
  });

  // const onSubmit = (fieldValues: any) => {
  //   console.log(fieldValues);
  // };

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

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   toast.error(t("invalid-email"));
    //   return;
    // }

    // // Ensure password is provided
    // if (!password) {
    //   toast.error(t("password-required"));
    //   return;
    // }

    handleLogin({ email, password });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-card">
      <div className="max-w-md rounded border-2 bg-card p-8 shadow">
        <div className="mb-8 flex flex-col items-center justify-center text-primary-foreground">
          <h1 className="mb-4 text-center text-2xl font-bold">
            {t("sign-in-title")}
          </h1>
          <p>{t("sign-in-subtitle")}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-muted-foreground">
          <label htmlFor="email">{t("email")}</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: t("validation.email-required"),
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: t("validation.email-invalid"),
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

          <label htmlFor="password">{t("password")}</label>
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
                  type="password"
                  placeholder={t("password-placeholder")}
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

          {formState.errors?.password ? <span>savaldebuloa</span> : null}
          <Button
            className="w-full rounded-2xl bg-primary"
            onClick={handleSubmit(onSubmit)}
          >
            {t("sign-in")}
          </Button>
        </div>

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
