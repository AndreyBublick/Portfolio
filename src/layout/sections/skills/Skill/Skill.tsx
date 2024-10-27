
import React, { FC } from 'react';
import { Icon, propsIconType } from '../../../../components/icon/Icon';
import styled from 'styled-components';
import { S } from './Skill_Styles';





export const Skill:FC<propsIconType> = ({id,viewBox,width,height}) => {
  return  <S.Skill>
                <Icon id={id} viewBox={viewBox} width={width} height={height} />
      
    </S.Skill>
  
}




