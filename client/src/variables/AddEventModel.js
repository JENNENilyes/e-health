import React ,{useState} from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({isOpen, onClose, onEventAdded}){
    const[title, setTitle]= useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const[localisation, setLocalisation]= useState("");


    const onSubmit = (event) =>{
        event.preventDefault();

        onEventAdded({
            title,
            start,
            end,
            localisation,
        })
        onClose();
    }
    return(
            <Modal isOpen={isOpen} onRequestClose={onClose} style={{overlay: {
      position: 'fixed',
      marginTop: '15%',
      marginLeft: '30%',
      marginRight: '20%',
      marginBottom: '5%',
      backgroundColor: 'rgba(50, 151, 211, 0.25)'
    },
    content: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      right: '10px',
      bottom: '10px',
      border: '1px solid #ccc',
      backgroundColor: '#1e1e2f',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
      
    }
  }} >
                <form onSubmit={onSubmit}>
                    <input className="form-control" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                    <div>
                        <label>Start date</label>
                        <Datetime value={start} onChange={date => setStart(date)}/>
                    </div>

                    <div>
                        <label>End date</label>
                        <Datetime value={end} onChange={date => setEnd(date)}/>
                    </div>
                    <input className="form-control" placeholder="Locatlisation" value={localisation} onChange={e => setLocalisation(e.target.value)} />


                    <button className="btn-simple active btn btn-info btn-sm">Add event</button>
                </form>


            </Modal>

        
    )



}