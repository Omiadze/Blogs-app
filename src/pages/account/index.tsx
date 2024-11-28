import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthContext } from "@/context/hooks/use-auth-context";
import { useSvgContext } from "@/context/hooks/use-svg-context";
import { fillProfileInfo, getProfileInfo } from "@/supabase/account";
import { FillProfileInfoPayload } from "@/supabase/account/index.types";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ProfileValuesDefault } from "@/form-defaults/form-defaults";

const ProfileView = () => {
  const { t } = useTranslation();

  const { user } = useAuthContext();
  const { handleSetUserSvg } = useSvgContext();

  const { register, handleSubmit, watch } = useForm<FillProfileInfoPayload>({
    defaultValues: ProfileValuesDefault,
  });

  const avatarUrl = watch("avatar_url");

  useEffect(() => {
    if (user) {
      getProfileInfo(user?.user.id).then((res) => console.log(res));
      console.log("user", user);
    }
  }, [user]);

  const { mutate: handleFillProfileInfo } = useMutation({
    mutationKey: ["fill-profile-info"],
    mutationFn: fillProfileInfo,
  });

  const onSubmit = (data: FillProfileInfoPayload) => {
    if (!user?.user?.id) {
      console.error("User ID is undefined!");
      return;
    }

    handleFillProfileInfo({ ...data, id: user.user.id });
  };

  useEffect(() => {
    console.log("Avatar URL being set:", avatarUrl);
    if (avatarUrl) {
      handleSetUserSvg(avatarUrl);
    }
  }, [avatarUrl, handleSetUserSvg]);

  return (
    <>
      <div className="m-9 flex items-center justify-center bg-card">
        <div className="w-full max-w-md rounded border-2 bg-card p-8 shadow">
          <div className="flex flex-col items-center justify-center text-primary-foreground">
            <h1 className="mb-4 text-center text-2xl font-bold">
              {t("profile-info-title")}
            </h1>
            <div className="flex flex-col items-center justify-center gap-y-4 p-5 text-muted-foreground">
              <label>{t("username")}</label>
              <Input
                className="border border-black"
                {...register("username")}
              />

              <label>{t("avatar")}</label>
              <select
                className="border border-black"
                {...register("avatar_url")}
              >
                <option value="https://api.dicebear.com/9.x/bottts/svg?baseColor=1e88e5">
                  {t("avatar-option-blue")}
                </option>
                <option value="https://api.dicebear.com/9.x/bottts/svg?baseColor=fdd835">
                  {t("avatar-option-yellow")}
                </option>
                <option value="https://api.dicebear.com/9.x/bottts/svg?baseColor=d81b60">
                  {t("avatar-option-pink")}
                </option>
                <option value="https://api.dicebear.com/9.x/bottts/svg?baseColor=757575">
                  {t("avatar-option-gray")}
                </option>
              </select>

              <label>{t("full-name-ka")}</label>
              <Input
                className="border border-black"
                {...register("full_name_ka")}
              />

              <label>{t("full-name-en")}</label>
              <Input
                className="border border-black"
                {...register("full_name_en")}
              />

              <Button
                onClick={handleSubmit(onSubmit)}
                className="w-full rounded-2xl bg-primary"
              >
                {t("edit-profile-info")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileView;
