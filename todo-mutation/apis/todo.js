import axiosIntance from "./axiosInstance.js";


//TODO 생성
const postTodo = async ({title, content, checked=false}) => {
    const {data} = await axiosIntance.post("/todo", {
        title,
        content,
        checked,
    });

    return data;
}


//TODO List 가져오기
const getTodoList = async ({title}) => {
    let url = "/todo";

    if (title){
        url += `?title=${title}`;
    }

    const {data} = await axiosIntance.get(url);

    return data;
};


//TODO 단건 가져오기
const getTodo = async ({id}) => {
    const {data} = await axiosIntance.get(`/todo/${id}`);

    return data;
};


//TODO 수정하기
const patchTodo = async ({id, title, content, checked}) => {
    const {data} = await axiosIntance.patch(`/todo/${id}`, {
        title, content, checked,
    });

    return data;
};


//TODO 삭제하기
const deleteTodo = async ({id}) => {
    const {data} = await axiosIntance.delete(`/todo/${id}`);

    return data;
}

export {postTodo, getTodo, getTodoList, patchTodo, deleteTodo};