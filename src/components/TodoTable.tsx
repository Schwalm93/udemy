import ToDoRowItem from "./TodoRowItem";

interface Props {
    todos: {
        rowNr: number,
        rowDes: string,
        rowAssign: string;
    }[];

}

function TodoTable(props: Props) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Assigned</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => (
                    <ToDoRowItem
                        rowNr={todo.rowNr}
                        rowDes={todo.rowDes}
                        rowAssign={todo.rowAssign}
                        />
                ))}
            </tbody>
        </table>
    )
}

export default TodoTable;