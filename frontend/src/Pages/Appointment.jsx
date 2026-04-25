import React, { useEffect,useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/Appcontext'
import { useParams } from 'react-router-dom';

import { assets as frontassets } from '../assets/assets_frontend/assets'
import Relateddoctors from '../Components/Relateddoctors';


function Appointment() {
    const {docId}=useParams();
    
    
   const {doctors,currency}= useContext(AppContext);
   const daysofWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

   
    const [docInfo, setDocInfo]= useState(null);
     const [docslots, setDocSlots]= useState([]);
     const  [slotindex, setSlotIndex]= useState(0);
    const  [slottime, setSlotTime]= useState("");
    const [booking, setBooking] = useState(false);

       async function FetchDocInfo(){
                   const docInfo= doctors.find((item)=> item._id=== docId); 
                   setDocInfo(docInfo);
                   
       }
          
       async  function AvailableSlots(){
          setDocSlots([])

          //getting current data
          let today= new Date();

          for(let i=0;i<7;i++){
            // getting data with index
            let currentDate= new Date(today);
            currentDate.setDate(today.getDate() + i);

          // settting endtime of the data with index
            let endtime= new Date();
            endtime.setDate(today.getDate() + i);
            endtime.setHours(21,0,0,0);


            // setting hours
              
             if(today.getDate()=== currentDate.getDate()){
                currentDate.setHours(currentDate.getHours()>10 ? currentDate.getHours()+1 : 10);
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
              }  else{
                currentDate.setHours(10);
                currentDate.setMinutes(0);
              }

              let timeSlots= [];

            
              while(currentDate < endtime){
                let formattedTime= currentDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                // add slots to array
                timeSlots.push({
                  datetime: new Date(currentDate),
                  time: formattedTime,
                });
                 //increment  current time by 30 minutes
                 currentDate.setMinutes(currentDate.getMinutes() + 30);
              
              }
  
                setDocSlots(prev => [...prev, timeSlots]);

          } 
        
         }

         async function bookAppointment() {
           try {
             if (!docslots[slotindex]?.length || !slottime) {
               alert("Please select date and time")
               return
             }

             const selected = docslots[slotindex].find((s) => s.time === slottime)
             if (!selected) {
               alert("Invalid slot selected")
               return
             }

             setBooking(true)

             // Appointment details
             const payload = {
               doctorId: docId,
               doctorName: docInfo.name,
               appointmentDate: selected.datetime.toISOString().split("T")[0], // YYYY-MM-DD
               appointmentTime: selected.time,
               fees: docInfo.fees
             }

             console.log("Booking appointment:", payload)
             
             // Success message
             setTimeout(() => {
               alert(`Appointment booked successfully!\nDate: ${payload.appointmentDate}\nTime: ${payload.appointmentTime}\nDoctor: ${payload.doctorName}`)
               setBooking(false)
             }, 1000)

           } catch (err) {
             alert(err.message)
             setBooking(false)
           }
         }
        useEffect(()=>{
            FetchDocInfo();
        },[docId,doctors]);

         useEffect(()=>{
            AvailableSlots();
         },[docInfo])


  return docInfo &&  (
  
    <div>
      {/*  doctor details */}
      <div className='flex flex-col sm:flex-row  gap-4 '>
      
          <img className='bg-primary w-full sm:max-w-72 rounded-lg ' src={docInfo.image} alt=''/>
        
        <div className='flex-1 border border-gray-400  rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0  mt-[-80px] sm:mt-0 '>
          {/* doctor  info name and speciality */}
          <h2 className=' flex items-center gap-2 text-xl font-medium text-gray-900'>{docInfo.name}
           <img className='w-5 ' src={frontassets.verified_icon} alt=''/>
           </h2>
           <div className='flex items-center gap-2 text-sm mt-1 text-gray-600 '>
            <p>{docInfo.degree}-{docInfo.speciality} </p>
             <button className='py-0.5 px-2  border text-xs rounded-full '>
              {docInfo.experience} 
             </button>
           </div>
           {/* doctor about */}
           <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3 '>About
              <img src={frontassets.info_icon} alt=''/></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1 '>{docInfo.about}</p>
           </div>
           <p className='text-gray-500 font-medium mt-4 '>
        APPOINTMENT FEE:<span className='text-gray-600 '>{currency}{docInfo.fees}</span>
           </p>
        </div>
      </div>
      
                  {/* booking  slots */}
                 <div className='sm:ml-72 sm:pl-4 mt-8 font-medium text-gray-700'>
                  <p className='mb-3'>Booking slots</p>
                  
                  {/* Date Cards */}
                  <div className='flex gap-3 items-center w-full overflow-x-auto'>
                    {docslots.length > 0 && docslots.map((item,index)=>{
                      const dayDate = item[0]?.datetime
                      if (!dayDate) return null
                      return (
                        <div 
                          key={index}
                          onClick={() => {
                            setSlotIndex(index)
                            setSlotTime(item[0]?.time || "")
                          }}
                          className={`text-center py-4 px-5 min-w-16 rounded-full border cursor-pointer transition-all ${
                            slotindex === index ? 'bg-primary text-white' : 'border-gray-200 hover:bg-primary hover:text-white'
                          }`}
                        >
                          <p>{daysofWeek[dayDate.getDay()].slice(0, 3)}</p>
                          <p>{dayDate.getDate()}</p>
                        </div>
                      )
                    })}
                  </div>

                  {/* Time Slots */}
                  <div className='flex items-center gap-3 w-full overflow-x-auto mt-4'>
                    {docslots[slotindex]?.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => setSlotTime(item.time)}
                        className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full border cursor-pointer transition-all ${
                          item.time === slottime ? 'bg-primary text-white' : 'text-gray-400 border-gray-300 hover:bg-primary hover:text-white'
                        }`}
                      >
                        {item.time.toLowerCase()}
                      </div>
                    ))}
                  </div>

                  {/* Book Button */}
                 <button className='bg-primary text-white text-sm font-light  px-14 py-3 rounded-full  my-6'>
                   book appointment
                 </button>

                 </div>
                  
              {/* listing related doctors  */}
          
                 <Relateddoctors docId={docId} speciality={docInfo.speciality}/>
                
               
        
                
    </div>
  )
}

export default Appointment;
