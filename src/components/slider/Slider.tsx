
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
        
        <Slide userEmail={'Анна, Ментор'} description={'«Андрей выделялся среди других студентов глубоким пониманием React и TypeScript. Всегда предлагал нестандартные, но рабочие решения. Уверен, что станет ценным специалистом в любой команде.»'} />,
        <Slide userEmail={'Анна, студент курса Frontend'} description={'«Работали вместе над учебным проектом. Андрей ответственно подходит к задачам, всегда готов помочь разобраться с проблемой. Приятно было сотрудничать.»'}/>,
        <Slide userEmail={'Екатерина, участник команды'} description={'«Когда мы работали в группе над итоговым проектом, Андрей взял на себя сложную часть с настройкой роутинга и сделал всё качественно.»'}/>,
        
    ];


    return (
        <S.Slider>
<AliceCarousel innerWidth={700}
        mouseTracking
        disableButtonsControls
        renderDotsItem={ ()=> <S.PaginationItem area-label={'navigation slider'}></S.PaginationItem>}
        

items={items}/>
           

        </S.Slider>
    )
}





