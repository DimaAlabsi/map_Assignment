import { toast } from "react-toastify";

export const errorToast = (txt) => {
  return toast.error(txt, {
    theme: "dark",
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    newestOnTop: false,
  });
};
export const successToast = (txt) => {
  return toast.success(txt, {
    theme: "dark",
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    newestOnTop: false,
  });
};
