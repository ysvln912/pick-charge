import { ToastContext } from "@/components/common/toast/provider/ToastProvider";
import { useContext } from "react";

export const useToast = () => {
  const { triggerToast } = useContext(ToastContext);

  return {
    triggerToast,
  };
};
