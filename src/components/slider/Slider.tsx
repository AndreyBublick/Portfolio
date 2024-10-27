



import React from 'react'
import { S } from './Slider_Styles'
import { GradientWord } from '../GradientWord'

export const Slider = () => {
    return (
        <S.Slider>
                <S.SliderDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</S.SliderDescription>
                    <GradientWord>@ivan ivanow</GradientWord>
                    <S.Pagination justifyContent={'center'} gap={5}>
                        <S.PaginationItem area-label={'navigation slider'}></S.PaginationItem>
                        <S.PaginationItem isActive={true} area-label={'navigation slider'}></S.PaginationItem>
                        <S.PaginationItem area-label={'navigation slider'}></S.PaginationItem>
                    </S.Pagination>
        </S.Slider>
    )
}

