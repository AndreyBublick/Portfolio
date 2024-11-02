import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";


export const useInput = (sent:boolean)=>{

   const [value,setValue] = useState('');

   useEffect(()=>{
      if(sent){
         setValue('');
      }
   },[sent]);

   const changeValue = useCallback((e:ChangeEvent<HTMLInputElement>&FormEvent<HTMLTextAreaElement>,sent:boolean)=> {
      


    setValue(e.currentTarget.value); 
   },[]);

return {value,changeValue}
};