import Swal from "sweetalert2";

export const Notif = (props: string) => {
  const succesAlert = () => {
    Swal.fire({
      title: "Success",
      text: props,
      icon: "success",
      confirmButtonText: "Oke",
    });
  };
};
