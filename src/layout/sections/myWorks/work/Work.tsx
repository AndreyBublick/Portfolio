import React, { FC, useState } from 'react'

import { S } from './Work_Styles';

type propsType = {
    title: string,
    description: string,
    image: string,
};


export const Work: FC<propsType> = ({ title, description, image }) => {

    const [links, setLinks] = useState([{ href: '#', description: 'demo' }, { description: 'code', href: '#' }]);

    return <S.Work>

        <S.WorkImage>
            <div>
                <img src={image} alt="My Work" />
            </div>
        </S.WorkImage>
        <S.WorkBody>
            <S.WorkTitle> {title}</S.WorkTitle>
            <S.WorkDescription>{description}</S.WorkDescription>
            <S.Links>

            {links.map((linkData,i)=><LinkItem key={i} href={linkData.href} description={linkData.description}  />)}
               
            </S.Links>
        </S.WorkBody>

    </S.Work>

}

const LinkItem: FC<{href:string,description:string}> = ({href,description}) => {

    return <li><S.Link href={href} target='_blank'>{description}</S.Link></li>;
}; 
