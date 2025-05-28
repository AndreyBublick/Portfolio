import {FC, memo, useMemo, useState} from 'react';
import {Container} from '../../../components/Container';
import {SectionTitle} from '../../../components/SectionTitle';
import {SectionSubTitle} from '../../../components/SectionSubTitle';

import {S} from './MyWorks_Styles';
import {TextToLowerCase} from '../../../utils/utils';


import image1 from '.././../../assets/images/1.webp';
import image2 from '.././../../assets/images/2.webp';
import image3 from '.././../../assets/images/3.webp';
import image4 from '.././../../assets/images/4.webp';
import image5 from '.././../../assets/images/5.webp';
import image6 from '.././../../assets/images/6.webp';
import image7 from '.././../../assets/images/7.webp';
import image8 from '.././../../assets/images/8.webp';
import image9 from '.././../../assets/images/9.webp';
import image10 from '.././../../assets/images/10.webp';
import image11 from '.././../../assets/images/11.webp';

import {Project} from './project/Project';
import {AnimatePresence, motion} from "framer-motion"

export type Categories = 'spa' | 'all' | 'react' | 'landing page'|'Portfolio' | 'pet project';

export type Work = {
    title: string,
    description: string,
    image: string,
    category: Categories,
    id: number,
    link:string,
    gitLink:string,
    techStack:string,
};

export const MyWorks: FC = memo(() => {


    const [worksArray] = useState<Work[]>([
        {
            id: 1,
            link:'https://andreybublick.github.io/CANY/',
            gitLink:'https://github.com/AndreyBublick/CANY',
            title: 'CANY',
            description: 'Fullscreen Landing page with HTML & SASS & JS',
            image: image1,
            category: 'spa',
            techStack:'HTML, JavaScript, SASS',
        },
        {
            id: 2,
            link:'https://andreybublick.github.io/Site_neon/',
            gitLink:'https://github.com/AndreyBublick/Site_neon',
            title: 'PUNK',
            description: 'Сайт визитка для компании занимающейся неоновым искусством',
            image: image2,
            category: 'landing page',
            techStack:'HTML, JavaScript, SASS',
        },
        {
            id: 3,
            link:'https://andreybublick.github.io/Time_Hiking/',
            gitLink:'https://github.com/AndreyBublick/Time_Hiking',
            title: 'Time Hiking',
            description: 'Landing для туристической компании, занимающейся горящими турами, эксклюзивными отелями и приключениями мечты',
            image: image3,
            category: 'react',
            techStack:'HTML, JavaScript, SASS, React',
        },
        {
            id: 4,
            link:'https://andreybublick.github.io/GREENCO/',
            gitLink:'https://github.com/AndreyBublick/GREENCO',
            title: 'GREENCO',
            description: 'Сайт карточка, для цветочного магазина',
            image: image4,
            category: 'landing page',
            techStack:'HTML, JavaScript, SASS',
        },
        {
            id: 5,
            link:'https://andreybublick.github.io/Alstoy/',
            gitLink:'https://github.com/AndreyBublick/Alstoy',
            title: 'Alstroy Group',
            description: 'Сайт для строительной компании',
            image: image5,
            category: 'spa',
            techStack:'HTML, JavaScript, SASS',
        },
        {
            id: 6,
            link:'https://andreybublick.github.io/cozy-house/',
            gitLink:'https://github.com/AndreyBublick/cozy-house',
            title: 'Cozy House',
            description: 'Main page для приюта Cozy House',
            image: image6,
            category: 'landing page',
             techStack:'HTML, SASS',
        },
        {
            id: 7,
            link:'https://andreybublick.github.io/Shadow/',
            gitLink:'https://github.com/AndreyBublick/Shadow',
            title: 'Text Shadow generator',
            description: 'Проект для генерации теневых стилей для текста',
            image: image7,
            category: 'pet project',
             techStack:'HTML, JavaScript, SASS',
        },
        {
            id: 8,
            link:'https://andreybublick.github.io/cubS/',
            gitLink:'https://github.com/AndreyBublick/cubS',
            title: 'Метакуб-RGB',
            description: 'Метакуб меняющий цвет при наведении',
            image: image8,
            category: 'pet project',
             techStack:'HTML, SASS',
        },{
            id: 9,
            link:'https://andreybublick.github.io/Counter/',
            gitLink:'https://github.com/AndreyBublick/Counter',
            title: 'Counter',
            description: 'Счётчик чисел в указанном диапазоне',
            image: image9,
            category: 'pet project',
             techStack:'HTML, JavaScript, SASS, React',
        },
        {
            id: 10,
            link:'https://andreybublick.github.io/Site-may/',
            gitLink:'https://github.com/AndreyBublick/Site-may',
            title: 'Cuba',
            description: 'Шаблонная карточка сайта для Cuba',
            image: image10,
            category: 'landing page',
             techStack:'HTML, SASS',
        },
        {
            id: 11,
            link:'https://andreybublick.github.io/TaskAssistant/',
            gitLink:'https://github.com/AndreyBublick/TaskAssistant',
            title: 'Task Assistant',
            description: 'Цифровой ассистент по установке задач',
            image: image11,
            category: 'react',
             techStack:'HTML, JavaScript, SASS, React',
        },

    ]);
    const [category,setCategory] = useState<Categories>('all');

    /* const category = useParams().category as categoryType; */








    const tabsItems: Categories[] = ['all', 'landing page', 'react','spa',"pet project"];

    const worksFilterByCategory = useMemo(() => {
        if ((category === 'all'||category ==='Portfolio') || !category) {
           
            return worksArray;
        }
        return worksArray.filter((work) => TextToLowerCase(work.category) === TextToLowerCase(category));
    }, [worksArray, category]);

    return <S.MyWorks>
        <Container>
            <SectionTitle>Мои работы</SectionTitle>
            <SectionSubTitle>Проекты</SectionSubTitle>
            <S.MenuBody>
            {tabsItems.map((item)=><S.MenuItem aria-label='Элемент фильтрации по проектам' key={item} isActive = {item===category} onClick={()=>{setCategory(item)}}>
            <S.ItemElement  to={''}>{item}</S.ItemElement>
            <S.Mask><span>{item}</span></S.Mask>
            <S.Mask><span>{item}</span></S.Mask>
            </S.MenuItem>)}

            </S.MenuBody>


            <AnimatePresence>
                {worksFilterByCategory.length !== 0 && <S.Works flexWrap={'wrap'} gap={30}>


                    {worksFilterByCategory.map(({ category,id, ...data }) =>
                        <motion.div key={id} initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} layout>

                            <Project  id={id}  {...data}  />

                        </motion.div>
                    )}


                </S.Works>}
            </AnimatePresence>



        </Container>
    </S.MyWorks>

});
