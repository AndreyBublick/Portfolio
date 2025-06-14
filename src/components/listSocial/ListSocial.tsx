import React, {FC} from 'react'
import {Icon} from '../icon/Icon'
import {S} from './ListSocial_Styles';


export const ListSocial: FC = () => {
    return <S.ListSocial>
        <li>
            <S.ListLink aria-label='Git hub ссылка' href="https://github.com/AndreyBublick"><Icon id={'git'} /></S.ListLink>
        </li>
        <li>
            <S.ListLink aria-label='Еwitter ссылка' href="https://www.google.ru/?hl=ru"><Icon id={'twitter'} width={32} height={32} viewBox={'0 0 32 32'} /></S.ListLink>
        </li>
        <li>
            <S.ListLink aria-label='LinkedIn ссылка' href="https://www.google.ru/?hl=ru"><Icon id={'in'} /></S.ListLink>
        </li>
    </S.ListSocial>
}

