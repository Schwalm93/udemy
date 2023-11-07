
interface Props {
    rowNr: number,
    rowDes: string,
    rowAssign: string;
}

function ToDoRowItem(props: Props) {
    return (
        <tr>
            <th scope="row">{props.rowNr}</th>
            <td>{props.rowDes}</td>
            <td>{props.rowAssign}</td>
        </tr>
    )
}

export default ToDoRowItem;