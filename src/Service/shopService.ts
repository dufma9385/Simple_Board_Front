import axios from "axios";

export const getItemList = async () => {
    return await axios.get("/itemList");
}

export const postInsertItem = async (name: string) => {
    return await axios.post("/insert", {name});
}

export const deleteItem = async (name: string) => {
    return await axios.delete("/delete", {
        params: {
            name
        }
    });
}