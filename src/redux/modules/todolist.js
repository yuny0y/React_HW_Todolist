const CreateTodo ='CreateTodo';
const DeleteTodo = 'DeleteTodo';
const UpdateTodo = 'UpdateTodo';

export const addList =(payload) => {
    return {type : CreateTodo, payload}
};

export const changeList =(payload) => {
    return {type : UpdateTodo, payload}
};

export const deleteList =(payload) => {
    return {type : DeleteTodo, payload}
}

const initialState  = [
    {id :1, title: '리액트', contents : '공부하기', isDone : false},
    {id :2, title: '리액트', contents : '과제하기', isDone : false},
    {id :3, title: '리액트', contents : '마스터하기', isDone : false},
    {id :4, title: '리액트', contents : '복습하기', isDone : true},
]

const todolist = (state=initialState, action) => {
    switch(action.type) {
        case CreateTodo :
            state.map((item, idx) => item.id =idx)
            return [...state, action.payload]

        case DeleteTodo :
            let deleteListTodo =state.filter((item)=> 
            item.id !== action.payload)
            return(deleteListTodo)

        case UpdateTodo :
            let changeListTodo = state.map((item) => {
                if(item.id === action.payload){
                    item.isDone = !item.isDone
                    return item
                } else {
                    return item
                }
            });
            return (changeListTodo);
        default:
            return state;
    }
};

export default todolist;