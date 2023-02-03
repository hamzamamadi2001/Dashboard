import React ,{useState,useEffect} from 'react'
import { Button} from "flowbite-react";
 
 import { ImLocation2 } from 'react-icons/im';
import { TbMoodEmpty } from 'react-icons/tb';
import { MdOutlineFoodBank } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import { FiPackage } from 'react-icons/fi';



import {Table,Timeline,Checkbox}from "flowbite-react";
import Image from 'next/image';


 
 
ImLocation2

function About() {

   const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  console.log(updatedCheckedState)
}
 
   const [checkedState, setCheckedState] = useState(
   []
  );
  const [allcheck, setallcheck] = useState(false);

  
const [orders, setOrders] = useState([]);
 
     
    useEffect(() => {
    

    
   
 
   
        async function fetchText() {
        let response = await fetch('http://localhost:3000/api/orders',{method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
       });
      
        console.log(response.status); // 200
        console.log(response.statusText); // OK
      
        if (response.status === 200) {
            let data = await response.json();
           console.log("thisi is the data of orders",data)
           setOrders(data)
           setCheckedState( new Array(data.length).fill(false))
             
        }
      }
      
      fetchText();
 
      
      
      }, []);
   

 
 
  return (
    < >
            
    <div className='container mx-auto mt-20 grid grid-flow-row gap-1   '>
  

    <div className='mb-8 bg-red-500'>





 












    
     
    <Table  striped={true}    >
   <Table.Head>
  <Table.HeadCell  >
  <Checkbox />
    </Table.HeadCell>
    <Table.HeadCell  >
 uid
    </Table.HeadCell>
    <Table.HeadCell  >
      Product information
    </Table.HeadCell>
    <Table.HeadCell  >
      date
    </Table.HeadCell>
    </Table.Head>
  <Table.Body >  
    
  {orders && orders.map((ele,idx) => (
    <Table.Row  key={ele.id}>  
     <Table.Cell className='w-1/12'  >
     <Checkbox checked={checkedState[idx]}   onChange={() => handleOnChange(idx)} />
     </Table.Cell>
      <Table.Cell className='w-1/12'  >
        <p>{ele.id}</p>
        </Table.Cell>
         <Table.Cell className='bg-gray-300 '>
         {JSON.parse(ele.order).map((el) => (
      
        
     <> 
       <p className='text-black font-mono  mb-5 '>product name :<span className="font-bold">{el.name} </span>  the quantity: <span className="font-bold">{el.quantity} {el.unit} </span> </p>
      
       </>
       
         ))}
         </Table.Cell>
         <Table.Cell className='w-1/12'  >
        <p>{ele.date}</p>
        </Table.Cell>
    
     </Table.Row>
     ))}
     <hr className='w-full h-1'></hr>
 
 
 

 
    
         </Table.Body>
         </Table>
          
         </div>
         

{orders.length<=0 &&<div className='flex flex-col justify-center items-center'>
         <p className='text-cneter text-2xl font-mono'>{`there is no order yet (refresh the page)`}</p>
     <TbMoodEmpty color='gray' size={100}></TbMoodEmpty>
     </div> }

    </div>
    </>
  )
}

export default About
