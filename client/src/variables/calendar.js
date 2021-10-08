import React ,{useRef, useState} from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import AddEventModel from "./AddEventModel";
import axios from "axios";
import moment from "moment";
import { useContext } from 'react';
import { UidContext } from '../AppContext';
import { useSelector } from "react-redux";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (){
    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const calendarRef = useRef(null);

    const onEventAdded = (event) => {
        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent({
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title,
            localisation: event.localisation
        });

    }

    const uid = useContext(UidContext);
    const userData = useSelector((state)=> state.userReducer);

    async function handleEventAdd(data){
        console.log(".........")
        console.log(data.event);
        await axios.post('http://localhost:3002/EV/eventM?user='+uid, data.event);
 
    }
//http://localhost:3002/EV/eventM   data.event  + userID


    const adddiabet=async ()=>{
      axios.delete('http://localhost:3002/EV/'+uid)
      await axios.put(`http://localhost:3002/user/test`, {
            _id: uid,
            test: "A"        
          });
     axios.post('http://localhost:3002/EV' , {user: uid} );  }


     const addstrocke=async ()=>{
        axios.delete('http://localhost:3002/EV/'+uid)
        await axios.put(`http://localhost:3002/user/test`, {
              _id: uid,
              test: "B"        
            });
       axios.post('http://localhost:3002/EV' , {user: uid} );  }


       const addHDisease=async ()=>{
        axios.delete('http://localhost:3002/EV/'+uid)
        await axios.put(`http://localhost:3002/user/test`, {
              _id: uid,
              test: "C"        
            });
       axios.post('http://localhost:3002/EV' , {user: uid} );  }
  


    
       

    async function handleDatesSet(data){
        console.log(moment(data.start).toISOString());
        console.log(moment(data.end).toISOString());
        console.log(uid);
        console.log(userData._id)
        //        const response = await axios.get('http://localhost:3002/recom/event?user='+UserID+'&start='+moment(data.start).toISOString()+"&end="+moment(data.end).toISOString())
        const response = await axios.get( '  http://localhost:3002/EV/event?user='+uid+'&start='+moment(data.start).toISOString()+'&end='+moment(data.end).toISOString())
            setEvents(response.data);
    }
    //'http://localhost:3002/calendar/get-event?start='+moment(data.start).toISOString()+"&end="+moment(data.end).toISOString()
  
    //http://localhost:3002/EV/event?user=611d3562023fff10a4773886&start=2021-07-31T23:00:00.000Z&end=2021-09-11T23:00:00.000Z
//http://localhost:3002/calendar/get-event?start=2021-07-31T23:00:00.000Z&end=2021-09-11T23:00:00.000Z
//http://localhost:3002/recom/event?user=611d3570023fff10a4773887&start=2021-07-31T23:00:00.000Z&end=2021-09-11T23:00:00.000Z
    return(
        <section>
            <button className="btn-simple active btn btn-info btn-sm" onClick={()=>setModalOpen(true)} >add Event</button>
            <button className="btn-simple active btn btn-info btn-sm" onClick={adddiabet} >diabet</button>
            <button className="btn-simple active btn btn-info btn-sm" onClick={addstrocke} >Stroke</button>
            <button className="btn-simple active btn btn-info btn-sm" onClick={addHDisease} >heart disease</button>




            
            
            <div style={{position:"relative" ,zIndex: 0}}>
                <FullCalendar
                ref={calendarRef}
                events={events}
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                eventAdd={event => handleEventAdd(event)}
                datesSet={(date)=> handleDatesSet(date)}
                />
            </div>
            <AddEventModel isOpen={modalOpen} onClose={()=> setModalOpen(false)} onEventAdded={event => onEventAdded(event)}/>     
            
        </section>
    )
}