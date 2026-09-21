function Table({columns, data}) {
    return (<table border={1}>
        <TableHeader columns={columns}>header</TableHeader>
        <TableBody data={data}/>
    </table>);
}

function TableRow({row}){
    return (<tr>
        <td>{row.href}</td><td>{row.text}</td>
    </tr>)
}

function TableBody({data}){
    return(<tbody>
        {
        data.map(
            (v,i,a)=>
                {
                    return(<TableRow key={"el"+i} row={v}/>)
                }
        )
        }
        
    </tbody>)
}

function TableHeader({children, columns}) {
    return (<thead>
        <tr>
            {
                columns.map((v,i,a)=>{
                    return (<th key={"hell"+i}>{v.title}</th>);
                })
            }
        </tr>
    </thead>)
}

export {Table, TableHeader};