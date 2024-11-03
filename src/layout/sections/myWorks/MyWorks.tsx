


import { FC, useMemo, useState } from 'react';
import { Container } from '../../../components/Container';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionSubTitle } from '../../../components/SectionSubTitle';
import { Menu } from '../../../components/menu/Menu';

import { S } from './MyWorks_Styles';
import { useParams } from 'react-router-dom';
import { TextToLowerCase } from '../../../utils/utils';


import image1 from '.././../../assets/images/1.webp';
import image2 from '.././../../assets/images/2.webp';
import image3 from '.././../../assets/images/3.webp';
import image4 from '.././../../assets/images/4.webp';
import image5 from '.././../../assets/images/5.webp';
import image6 from '.././../../assets/images/6.webp';
import { Project } from '../projects/project/Project';
import { AnimatePresence, motion } from "framer-motion"

export type categoryType = 'spa' | 'all' | 'react' | 'landing page'|'Portfolio';
type workType = {
    title: string,
    description: string,
    image: string,
    category: categoryType,
    id: number,

};

export const MyWorks: FC = () => {


    const [worksArray, setWorskArray] = useState<workType[]>([
        {
            title: 'Project Tile goes here',
            description: 'SPA This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
            image: image1,
            category: 'spa',
            id: 1,
        },
        {
            title: 'Project Tile goes here',
            description: 'React This is sample project description random things are here in description This is sample project lorem ipsum gen ption random things are here in description This is sample project lorem ipsum generator for dummy contenterator for dummy content',
            image: image2,
            category: 'react',
            id: 2,
        },
        {
            title: 'Project Tile goes here',
            description: 'SPA This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
            image: image3,
            category: 'spa',
            id: 3,
        },
        {
            title: 'Project Tile goes here',
            description: 'React This is sample project description random things are here in description This is sample project lorem ipsum gen ption random things are here in description This is sample project lorem ipsum generator for dummy contenterator for dummy content',
            image: image4,
            category: 'react',
            id: 4,
        },
        {
            title: 'Project Tile goes here',
            description: 'spa This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
            image: image5,
            category: 'spa',
            id: 5,
        },
        {
            title: 'Project Tile goes here',
            description: 'landing page This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
            image: image6,
            category: 'landing page',
            id: 6,
        },




    ]);

    const category = useParams().category as categoryType;








    const tabsItems: categoryType[] = ['all', 'landing page', 'react','spa',];

    const worksFilterByCategory = useMemo(() => {



        if ((category === 'all'||'Portfolio') || !category) {
            return worksArray;
        }
        return worksArray.filter((work) => TextToLowerCase(work.category) === TextToLowerCase(category));
    }, [worksArray, category]);

    return <S.MyWorks>
        <Container>
            <SectionTitle>My Works</SectionTitle>
            <SectionSubTitle>Projects</SectionSubTitle>
            <S.MenuBody>

                <Menu activeElement={category ==='Portfolio' ? 'all' : (category ? category : 'all')} fz={'14px'} links={tabsItems} />
                {/* <MyWorksMenu /> */}

            </S.MenuBody>


            <AnimatePresence>
                {worksFilterByCategory.length !== 0 && <S.Works flexWrap={'wrap'} gap={30}>


                    {worksFilterByCategory.map(({ description, image, title, id }) =>
                        <motion.div layout key={id} initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <Project key={id} image={image} description={description} title={title} />

                        </motion.div>
                    )}


                </S.Works>}
            </AnimatePresence>



        </Container>
    </S.MyWorks>

}
