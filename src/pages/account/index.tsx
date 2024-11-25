import { useAuthContext } from "@/context/hooks/use-auth-context";
import { useSvgContext } from "@/context/hooks/use-svg-context";

import { fillProfileInfo, getProfileInfo } from "@/supabase/account";
import { FillProfileInfoPayload } from "@/supabase/account/index.types";
import { useMutation } from "@tanstack/react-query";

import { useEffect, useState } from "react";

const ProfileView = () => {
  const { user } = useAuthContext();
  const { handleSetUserSvg } = useSvgContext();

  const [profilePayload, setProfilePayload] = useState<FillProfileInfoPayload>({
    avatar_url: "",
    full_name_en: "",
    full_name_ka: "",
    username: "",
    // user: user?.user || null, // Ensure user is set properly
  });

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

  const handleSubmit = () => {
    handleFillProfileInfo({ ...profilePayload, id: user?.user?.id });
  };
  useEffect(() => {
    console.log("Avatar URL being set:", profilePayload.avatar_url);
    if (profilePayload.avatar_url) {
      handleSetUserSvg(profilePayload.avatar_url);
    }
  }, [profilePayload.avatar_url, handleSetUserSvg]);

  return (
    <>
      <h1 className="p-5 text-center text-4xl font-bold text-muted-foreground">
        Your Profile Info
      </h1>
      <div className="mb-4 mb-52 flex flex-col items-center justify-center gap-y-4 text-muted-foreground">
        <label>username</label>
        <input
          className="border border-black"
          name="username"
          value={profilePayload.username}
          onChange={(e) => {
            setProfilePayload({
              username: e.target.value,
              avatar_url: profilePayload.avatar_url,
              full_name_en: profilePayload.full_name_en,
              full_name_ka: profilePayload.full_name_ka,
              // user: user?.user || null, // Ensure user is set properly
            });
          }}
        />
        <label>Avatar</label>
        <select
          className="border border-black"
          name="avatar"
          value={profilePayload.avatar_url}
          onChange={(e) => {
            setProfilePayload({
              ...profilePayload,
              avatar_url: e.target.value,
            });
          }}
        >
          {/* Dropdown options */}
          <option value="https://api.dicebear.com/9.x/bottts/svg?baseColor=1e88e5">
            Blue
          </option>
          <option value="https://api.dicebear.com/9.x/bottts/svg?baseColor=fdd835">
            Yellow
          </option>
          <option value="https://api.dicebear.com/9.x/bottts/svg?baseColor=d81b60">
            Pink
          </option>
          <option value="https://api.dicebear.com/9.x/bottts/svg?baseColor=757575">
            Gray
          </option>
        </select>

        <label>Full Name Ka</label>
        <input
          className="border border-black"
          name="fullnameka"
          value={profilePayload.full_name_ka}
          onChange={(e) => {
            setProfilePayload({
              username: profilePayload.username,
              avatar_url: profilePayload.avatar_url,
              full_name_en: profilePayload.full_name_en,
              full_name_ka: e.target.value,
              // user: user?.user || null, // Ensure user is set properly
            });
          }}
        />
        <label>Full Name En</label>
        <input
          className="border border-black"
          value={profilePayload.full_name_en}
          name="fullnameen"
          onChange={(e) => {
            setProfilePayload({
              username: profilePayload.username,
              avatar_url: profilePayload.avatar_url,
              full_name_en: e.target.value,
              full_name_ka: profilePayload.full_name_ka,
              // user: user?.user || null, // Ensure user is set properly
            });
          }}
        />

        <button onClick={handleSubmit}>SUBMIT</button>
      </div>
    </>
  );
};

export default ProfileView;
