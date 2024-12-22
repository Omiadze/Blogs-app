import { useTranslation } from "react-i18next";
import { Input } from "@components/ui/input";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { BlogFormValuesDefault } from "@/form-defaults/form-defaults";
import { supabase } from "@/supabase";
import { useAuthContext } from "@/context/hooks/use-auth-context";

type FormValues = {
  title_en: string;
  title_ka: string;
  description_en: string;
  description_ka: string;
  image_file: File;
};
function BlogsForm() {
  const { user } = useAuthContext();
  const { t } = useTranslation();

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: BlogFormValuesDefault,
  });

  const onSubmit = (data: FormValues) => {
    console.log("data", data);
    supabase.storage
      .from("blog_images")
      .upload(data?.image_file?.name, data?.image_file)
      .then((res) => {
        return supabase
          .from("Blogs")
          .insert({
            title_en: data.title_en,
            title_ka: data.title_ka,
            description_en: data.description_en,
            description_ka: data.description_ka,
            image_url: res.data?.fullPath,
            user_id: user?.user?.id,
          })
          .then(() => {
            alert("You Successfully created blog");
          });
      });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-card">
      <div className="max-w-md rounded border-2 bg-card p-8 shadow">
        <div className="mb-8 flex flex-col items-center justify-center text-primary-foreground">
          <h1 className="mb-4 text-center text-2xl font-bold">
            {t("create-blog")}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-muted-foreground">
          <label htmlFor="email">{t("title(English)")}</label>
          <Controller
            name="title_en"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="w-full">
                <Input
                  placeholder={t("title(english)")}
                  onChange={onChange}
                  value={value}
                  className="border border-muted-foreground"
                />
              </div>
            )}
          />

          <label htmlFor="password">{t("title(Georgian)")}</label>
          <Controller
            name="title_ka"
            control={control}
            render={({ field, fieldState }) => (
              <div className="w-full">
                <Input
                  {...field}
                  type="text"
                  placeholder={t("title(Georgian)")}
                  className={`border ${
                    fieldState.error
                      ? "border-red-500"
                      : "border-muted-foreground"
                  }`}
                />
              </div>
            )}
          />

          <label htmlFor="email">{t("description(English)")}</label>
          <Controller
            name="description_en"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="w-full">
                <Input
                  placeholder={t("description(English)")}
                  onChange={onChange}
                  value={value}
                  className="border border-muted-foreground"
                />
              </div>
            )}
          />
          <label htmlFor="email">{t("description(Georgian)")}</label>
          <Controller
            name="description_ka"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className="w-full">
                <Input
                  placeholder={t("description(Georgian)")}
                  onChange={onChange}
                  value={value}
                  className="border border-muted-foreground"
                />
              </div>
            )}
          />
          <label htmlFor="email">{t("image")}</label>
          <Controller
            name="image_file"
            control={control}
            render={({ field: { onChange } }) => (
              <div className="w-full">
                <Input
                  type="file"
                  placeholder={t("file")}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    onChange(file);
                  }}
                  className="border border-muted-foreground"
                />
              </div>
            )}
          />
          <Button
            className="w-full rounded-2xl bg-primary"
            onClick={handleSubmit(onSubmit)}
          >
            {t("create")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BlogsForm;
