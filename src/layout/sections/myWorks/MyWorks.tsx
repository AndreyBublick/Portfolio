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
};

export const MyWorks: FC = memo(() => {


    const [worksArray] = useState<Work[]>([
        {
            gitLink:'https://github.com/AndreyBublick/CANY',
            link:'https://andreybublick.github.io/CANY/',
            title: 'CANY',
            description: 'SPA This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
            image: image1,
            category: 'spa',
            id: 1,
        },
        {
            gitLink:'https://github.com/AndreyBublick/Site_neon',
            link:'https://andreybublick.github.io/Site_neon/',
            title: 'Neonion',
            description: 'React This is sample project description random things are here in description This is sample project lorem ipsum gen ption random things are here in description This is sample project lorem ipsum generator for dummy contenterator for dummy content',
            image: image2,
            category: 'landing page',
            id: 2,
        },
        {
            id: 3,
            gitLink:'https://github.com/AndreyBublick/Time_Hiking',
            link:'https://andreybublick.github.io/Time_Hiking/',
            title: 'Time Hiking',
            description: 'SPA This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
            image: image3,
            category: 'react',
        },
        {
            gitLink:'https://github.com/AndreyBublick/GREENCO',
            link:'https://andreybublick.github.io/GREENCO/',
            title: 'GREENCO',
            description: 'React This is sample project description random things are here in description This is sample project lorem ipsum gen ption random things are here in description This is sample project lorem ipsum generator for dummy contenterator for dummy content',
            image: image4,
            category: 'landing page',
            id: 4,
        },
        {
            id: 5,
            link:'https://github.com/AndreyBublick/Alstoy',
            gitLink:'https://andreybublick.github.io/Alstoy/',
            title: 'Alstroy Group',
            description: 'spa This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
            image: image5,
            category: 'spa',
        },
        {
            id: 6,
            link:'https://github.com/AndreyBublick/cozy-house',
            gitLink:'https://andreybublick.github.io/cozy-house/',
            title: 'Cozy House',
            description: 'landing page Cozy House',
            image: image6,
            category: 'landing page',
        },
        {
            id: 7,
            link:'https://andreybublick.github.io/Shadow/',
            gitLink:'https://github.com/AndreyBublick/Shadow',
            title: 'text-shadow generator',
            description: 'text-shadow generator',
            image: image7,
            category: 'pet project',
        },
        {
            id: 8,
            link:'https://andreybublick.github.io/cubS/',
            gitLink:'https://github.com/AndreyBublick/cubS',
            title: 'cubS',
            description: 'cubS',
            image: image8,
            category: 'pet project',
        },{
            id: 9,
            link:'https://andreybublick.github.io/Counter/',
            gitLink:'https://github.com/AndreyBublick/Counter',
            title: 'Counter',
            description: 'Counter',
            image: image9,
            category: 'pet project',
        },
        {
            id: 10,
            link:'https://andreybublick.github.io/Site-may/',
            gitLink:'https://github.com/AndreyBublick/Site-may',
            title: 'Counter',
            description: 'Counter',
            image: image10,
            category: 'pet project',
        },



    ]);
    const [category,setCategory] = useState<Categories>('all');

    /* const category = useParams().category as categoryType; */








    const tabsItems: Categories[] = ['all', 'landing page', 'react','spa',];

    const worksFilterByCategory = useMemo(() => {
        if ((category === 'all'||category ==='Portfolio') || !category) {
           
            return worksArray;
        }
        return worksArray.filter((work) => TextToLowerCase(work.category) === TextToLowerCase(category));
    }, [worksArray, category]);

    return <S.MyWorks>
        <Container>
            <SectionTitle>My Works</SectionTitle>
            <SectionSubTitle>Projects</SectionSubTitle>
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
