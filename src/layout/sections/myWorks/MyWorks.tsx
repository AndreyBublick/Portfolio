


import  { FC, useMemo, useState } from 'react';
import { Container } from '../../../components/Container';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionSubTitle } from '../../../components/SectionSubTitle';
import { Menu } from '../../../components/menu/Menu';

import { S } from './MyWorks_Styles';
import {  useParams } from 'react-router-dom';
import { TextToLowerCase } from '../../../utils/utils';


import image1 from '.././../../assets/images/1.webp';
import image2 from '.././../../assets/images/2.webp';
import image3 from '.././../../assets/images/3.webp';
import image4 from '.././../../assets/images/4.webp';
import image5 from '.././../../assets/images/5.webp';
import image6 from '.././../../assets/images/6.webp';
import { Project } from '../projects/project/Project';


export type categoryType = 'spa' | 'all' | 'react' | 'landing page';
type workType = {
    title: string,
    description: string,
    image: string,
    category: categoryType,
};

export const MyWorks: FC = () => {


    const [worksArray, setWorskArray] = useState<workType[]>([
        {
            title: 'Project Tile goes here',
            description: 'SPA This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
            image: image1,
            category: 'spa',
        },
        {
            title: 'Project Tile goes here',
            description: 'React This is sample project description random things are here in description This is sample project lorem ipsum gen ption random things are here in description This is sample project lorem ipsum generator for dummy contenterator for dummy content',
            image: image2,
            category: 'react',
        },
        {
            title: 'Project Tile goes here',
            description: 'SPA This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
            image: image3,
            category: 'spa',
        },
        {
            title: 'Project Tile goes here',
            description: 'React This is sample project description random things are here in description This is sample project lorem ipsum gen ption random things are here in description This is sample project lorem ipsum generator for dummy contenterator for dummy content',
            image: image4,
            category: 'react',
        },
        {
            title: 'Project Tile goes here',
            description: 'spa This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
            image: image5,
            category: 'spa',
        },
        {
            title: 'Project Tile goes here',
            description: 'landing page This is sample project description random things are here in description This is sample project lorem ipsum gen ption random things are here in description This is sample project lorem ipsum generator for dummy contenterator for dummy content',
            image: image6,
            category: 'landing page',
        },


    ]);

    const category = useParams().category as categoryType;







    const tabsItems:categoryType[] = ['all', 'landing page', 'react', 'spa'];

    const worksFilterByCategory = useMemo(() => {



        if (category === 'all' || !category) {
            return worksArray;
        }
        return worksArray.filter((work) => TextToLowerCase(work.category)  === TextToLowerCase(category) );
    }, [worksArray, category]);

    return <S.MyWorks>
        <Container>
            <SectionTitle>My Works</SectionTitle>
            <SectionSubTitle>My Works</SectionSubTitle>
            <S.MenuBody>

                <Menu activeElement={category ? category : 'all'} fz={'14px'} links={tabsItems} />
                {/* <MyWorksMenu /> */}

            </S.MenuBody>
            {worksFilterByCategory.length !== 0 && <S.Works flexWrap={'wrap'} gap={30}>
                {worksFilterByCategory.map(({ description, image, title }, i) => <Project key={i} image={image} description={description} title={title} />)}
            </S.Works>}



        </Container>
    </S.MyWorks>

}
