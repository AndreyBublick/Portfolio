import { ContactForm } from "../layout/sections/сontactForm/ContactForm";
import { AboutMe } from "../layout/sections/aboutMe/AboutMe";
import { MailMe } from "../layout/sections/mailMe/MailMe";
import { Main } from "../layout/sections/main/Main";
import { Skills } from "../layout/sections/skills/Skills";
import { Home } from "../pages/home/Home";
import { Error } from "../components/error/Error";
import {MyWorks} from "../layout/sections/myWorks/MyWorks";

export const routes = [{
    path:'/main',
    element:<Main />,
},{
    path:'/about',
    element:<><AboutMe /> </>,
},
{
    path:'/technologies',
    element:<><Skills /></>,
},
{
    path:'/tech_stack',
    element:<Skills />,
},{
    path:'/projects',
    element:<MyWorks />,
},
{
    path:'/contact',
    element:<> <MailMe /> <ContactForm/></>,
},
/* {
    path:'/home/:category',
    element:<Home />,
}, */

 {
    path:'/Portfolio',
    element:<Home />,
}, 
{
    path:'/',
    element:<Home />,
},
/* {
    path:'/:category',
    element:<Home />,
}, */
{
    path:'*',
    element:<><Error /></>,
}
];