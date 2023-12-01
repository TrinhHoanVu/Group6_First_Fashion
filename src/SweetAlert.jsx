
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";


function SweetAlert() {
    const showAlert = () => {
        Swal.fire({
            title: "Notice",
            text: "We've recieved your email! Thank you!",
            icon: "success",
            confirmButtonText: "OK",
          });
    }
    return ( 
        <div className="container d-flex justify-content-center" style={{marginTop: 90}}>
               <button onClick={() => showAlert()} className="btn btn-primary btn-lg">Show Alert</button>
            </div>
     );
}

export default SweetAlert;