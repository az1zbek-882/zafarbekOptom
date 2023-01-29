import React from 'react'
import { Box, Canteiner, Flex, H4, H6, Img, Span } from '../components/index'
import img from '../assets/img/image.webp'
import styled from 'styled-components'
import { colors } from '../helpers/Colors'
function CategoriesPage() {
    const categories = [
        {
            id: 1,
            name: 'Мужчинам',
            img: img,
            price: 100000,
        },
        {
            id: 2,
            name: 'Женщинам',
            img: img,
            price: 100000,
        },
        {
            id: 3,
            name: 'Спорт',
            img: img,
            price: 100000,
        },
        {
            id: 4,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 5,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 6,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 7,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 8,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 9,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 10,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 11,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 12,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 13,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 14,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 15,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 16,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 17,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 18,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 19,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 20,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 21,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 22,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 23,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 24,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 25,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 26,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 27,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 28,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 29,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 30,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 31,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 32,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 33,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 34,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
        {
            id: 35,
            name: 'Электроника',
            img: img,
            price: 100000,
        },
    ]
    return (
        <Canteiner>
            <Row>
                {
                    categories.map((item) => (
                        <StyledItem >
                            <StyledWrap mb='6px'>
                                <Img
                                    src={item.img}
                                    alt='categoriya'
                                    objectFit='cover'
                                />
                            </StyledWrap>
                            <FlexTop>
                                <Box mb='37px'>
                                    <H4  >
                                        {item.name}
                                    </H4>
                                </Box>
                                <FlexBox>
                                    <H6>{item.price}</H6>
                                </FlexBox>
                                <Box>
                                    <CategoryBtn>
                                        <Span lineHeight='1.2px'>
                                            в карзину
                                        </Span>
                                    </CategoryBtn>
                                </Box>
                            </FlexTop>
                        </StyledItem>

                    ))
                }
            </Row>
        </Canteiner>
    )
}

export default CategoriesPage

const Row = styled(Flex)`
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`
const StyledItem = styled(Box)`
    width: 20%;
    height:416px;
    padding: 15px;
    transition: all 0.3s ease;
    border-radius: 5px;
    &:hover{
        box-shadow: 2px 4px 14px 6px rgba(34, 60, 80, 0.2);
    }
`
const StyledWrap = styled(Box)`
    width: 100%;
    height: 50%;
    border-bottom: 1px solid #000;
`
const FlexTop = styled(Flex)`
    height: 49%;
    flex-direction: column;
    justify-content: space-between;
`
const FlexBox = styled(Flex)`
    flex-direction: column;
    flex: 1 1 auto;
`
const CategoryBtn = styled.button`
    width: 100%;
    height: 45px;
    padding: 17px 11px;
    border: none;
    color: ${colors.white};
    background-color: ${colors.black};
    transition: all 0.3s ease;
    &:hover{
        background-color: ${colors.yellow};
        color:${colors.black};
    }
`
