import { ChangeEvent, FormEvent, useState } from "react";


export const useInput = ()=>{

   const [value,setValue] = useState('');

   const changeValue =(e:ChangeEvent<HTMLInputElement>&FormEvent<HTMLTextAreaElement>)=> {
    setValue(e.currentTarget.value); 
   };

return {value,changeValue}
};