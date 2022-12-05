import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Community from './Edit';
import Hungry from './Hungry';
import { getItemList } from '../Service/shopService';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
`;
const Title = styled.div`
    width: 100%;
    margin: 20px 0;
    text-align: center;
    font-size: 25px;
    font-weight: 600;
`;
const MenuContainer = styled.div`
    margin: 40px 50px;
    display: flex;
`;
const MenuText = styled.div<{index: number, click: number}>`
    width: 100px;
    height: 40px;
    text-align: center;
    border-bottom: ${props => props.index === props.click ? "2px solid aqua" : "2px solid #e6e6e6"};
    margin-right: 30px;
    font-weight: ${props => props.index === props.click && "600"};
`;
const Content = styled.div`
    width: calc(100% - 120px);
    margin: 60px;
`;

export interface ItemListType {
    id: number;
    name: string;
}
const MenuList = [
    { title: "배고파", index: 0},
    { title: "글써", index: 1}
];

const Home = () => {
    const [itemList, setItemList] = useState<{id: number, name: string}[]>([]);
    const [click, setClick] = useState<number>(0);
    // const [btnStyle, setBtnStyle] = useState<boolean>(false);

    useEffect(() => {
        getItemList().then(res => setItemList(res.data));
    }, [click]);

    return (
        <Container>
            <Title>Minkyeong's Shop</Title>
            <MenuContainer>
                {MenuList.map(item => (
                    <MenuText index={item.index} click={click} onClick={() => setClick(item.index)}>{item.title}</MenuText>
                ))}
            </MenuContainer>
            <Content>
                {click === 0 ? (
                    <Hungry itemList={itemList}/>
                ) : (
                   <Community/> 
                )}
            </Content>
        </Container>
    )
}
export default Home;