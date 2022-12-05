import styled from "styled-components";
import { ItemListType } from "./Home";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;
const ItemBox = styled.div`
    width: calc(100% - 20px);
    height: 200px;
    margin: 10px 0;
    text-align: center;
`;


const Hungry = (props: {itemList: ItemListType[]}) => {
    return (
        <Container>
            {props.itemList.map(item => {
                return (
                    <ItemBox>{item.name}</ItemBox>
                )
            })}
        </Container>
    )
}

export default Hungry;