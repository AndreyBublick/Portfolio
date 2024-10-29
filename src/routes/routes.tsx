import { ContactForm } from "../layout/sections/сontactForm/ContactForm";
import { AboutMe } from "../layout/sections/aboutMe/AboutMe";
import { MailMe } from "../layout/sections/mailMe/MailMe";
import { Main } from "../layout/sections/main/Main";
import { Projects } from "../layout/sections/projects/Projects";
import { Skills } from "../layout/sections/skills/Skills";
import { Home } from "../pages/home/Home";
import { MyWorks } from "../layout/sections/myWorks/MyWorks";

export const routes = [{
    path:'/main',
    element:<Main />,
},{
    path:'/about',
    element:<><AboutMe /> <MyWorks /> </>,
},
{
    path:'/tech_stack',
    element:<Skills />,
},{
    path:'/projects',
    element:<Projects />,
},
{
    path:'/contact',
    element:<> <MailMe /> <ContactForm/></>,
},
{
    path:'/home/:category',
    element:<Home />,
},
{
    path:'/:category',
    element:<Home />,
},
{
    path:'/',
    element:<Home />,
}
];