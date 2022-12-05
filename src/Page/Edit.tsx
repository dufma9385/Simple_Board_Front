import { useState } from 'react';
import styled from 'styled-components';
import { postInsertItem, deleteItem } from '../Service/shopService';

const Container = styled.div`
    width: 100%;
`;
const Text1 = styled.div`
    font-size: 20px;
`;
const WriteBox = styled.input`
    width: 100%;
    height: 50px;
    border: 1px solid #e6e6e6;
    margin: 20px 0;
`;
const SendBtn = styled.button<{color: string}>`
    width: 100px;
    height: 50px;
    background: ${props => props.color};
    border: ${props => `1px solid ${props.color}`};
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 50px;
`;
const Community = () => {
    const [insertInput, setInsertInput] = useState<string>("");
    const [deleteInput, setDeleteInput] = useState<string>("");

    const insertHandle = (e: any) => {
        setInsertInput(e.target.value);
    }
    const deleteHandle = (e: any) => {
        setDeleteInput(e.target.value);
    }

    const insertBtn = () => {
        postInsertItem(insertInput)
        .then(res => alert(res.data));
    }
    const deleteBtn = () => {
        deleteItem(deleteInput)
        .then(res => alert(res.data));
    }
    return (
        <Container>
            <Text1>먹고싶은 음식 있으면 적고가~ </Text1>
            <WriteBox onChange={insertHandle}/>
            <SendBtn color={"aqua"} onClick={insertBtn}>저장</SendBtn>

            <Text1>삭제할 음식 있으면 삭제~</Text1>
            <WriteBox onChange={deleteHandle}/>
            <SendBtn color={"#fd3333"} onClick={deleteBtn}>삭제</SendBtn>
        </Container>
    )
}

export default Community;