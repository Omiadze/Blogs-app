import { fillProfileInfo } from "@/supabase/account";
import { login, register } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });
};

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: login,
  });
};

export const useFillProfileInfo = () => {
  return useMutation({
    mutationKey: ["fill-profile-info"],
    mutationFn: fillProfileInfo,
  });
};
