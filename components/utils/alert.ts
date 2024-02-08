import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export class Alert {
  customAlert(icon: any, res: string, mess: any): Promise<any> {
    return Swal.fire({
      icon: icon,
      title: res,
      text: mess,
      showCancelButton: false,
    });
  }
}

const showCustomAlert = new Alert();

export default showCustomAlert;
