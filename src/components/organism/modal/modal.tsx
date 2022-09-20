import {FC} from "react";
import "./modal.scss";

interface Props{
    Visible:boolean,
    Message:string,
    setModal:(paramFlag: any) => void;
}

export const Modal:FC<Props> = ({Visible,Message, setModal}) => {
  return (
    <div>
  {
    Visible?
    <div className="modal">
    // molecula 
        <div className="popup">
          //algo dinamico en texto
          <h2>Pichincha dice:</h2>
          <a className="close" 
             onClick={()=>setModal({
              Visible:false,
              Message:"Sin operacion por mostrar"
             })}
             href="#">
            &times;
          </a>
          <div className="content">
          {Message}// abierto a children component
          </div>
        </div>
      </div>:null
      
  }
      
    </div>
  );
};
