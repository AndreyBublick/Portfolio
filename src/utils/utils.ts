

export const TextToLowerCase = (text:string)=>{

return text.toLowerCase().split('').map((letter) => letter === ' ' ? '_' : letter).join('');

};