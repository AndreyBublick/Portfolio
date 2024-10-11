
import React, { FC } from 'react';
import { Icon, propsIconType } from '../../../../components/icon/Icon';
import styled from 'styled-components';




export const Skill:FC<propsIconType> = ({id,viewBox,width,height}) => {
  return  <SkillStyled>
                <Icon id={id} viewBox={viewBox} width={width} height={height} />
      
    </SkillStyled>
  
}




const SkillStyled = styled.div`
/* flex:0 0 90px; */
text-align:center;
`;