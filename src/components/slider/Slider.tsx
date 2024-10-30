
import { S } from './Slider_Styles'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { GradientWord } from '../GradientWord';
import { FC } from 'react';
import '../../styles/slider.css';
type slidePropsType = {
    userEmail:string,
    description:string
};

const Slide:FC<slidePropsType> = ({userEmail,description})=>{
    return <>
            <S.SliderDescription>{description}</S.SliderDescription>
            <GradientWord>@{userEmail}</GradientWord>
            </>
    };

export const Slider = () => {
  



    const items = [
        
        <Slide userEmail={'ivan ivanov'} description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'} />,
        <Slide userEmail={'fedor fedorovich'} description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}/>,
        <Slide userEmail={'vector vectorovich'} description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}/>,
        
    ];


    return (
        <S.Slider>
<AliceCarousel innerWidth={700}
        mouseTracking
        disableButtonsControls
        renderDotsItem={ ()=> <S.PaginationItem area-label={'navigation slider'}></S.PaginationItem>}
        

items={items}/>
              {/*   <S.SliderDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</S.SliderDescription>
                    <GradientWord>@ivan ivanow</GradientWord>
                    <S.Pagination  justifyContent={'center'} gap={5}>
                        <S.PaginationItem area-label={'navigation slider'}></S.PaginationItem>
                        <S.PaginationItem isActive={true} area-label={'navigation slider'}></S.PaginationItem>
                        <S.PaginationItem area-label={'navigation slider'}></S.PaginationItem>
                    </S.Pagination> */}

        </S.Slider>
    )
}





