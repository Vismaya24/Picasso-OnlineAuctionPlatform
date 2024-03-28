const Add = () => {
    const handleAdd = () => {
        const add="Add button is  Clicked";
        console.log(add);
    }
        return(
            <button style={{width: "100px", height: "40px", color: "white", borderColor: "transparent", backgroundColor: "black", marginLeft: "10px"}} onClick={handleAdd}>Add</button>
        )
}
const Edit = () => {
    const handleEdit = () => {
        const edit="Edit button is  Clicked";
        console.log(edit);
    }
        return(
            <>
            <button style={{width: "100px", height: "40px", color: "white", borderColor: "transparent", backgroundColor: "black", marginLeft: "10px"}} onClick={handleEdit}>Edit</button>
            </>
        )
}
const Delete = () => {
    const handleDelete = () => {
        const del="Delete button is  Clicked";
        console.log(del);
    }
        return(
            <>
            <button style={{width: "100px", height: "40px", color: "white", borderColor: "transparent", backgroundColor: "black", marginLeft: "10px"}} onClick={handleDelete}>Delete</button>
            </>
        )
    }

const Get= () => {
    const handleGet = () => {
        const del="Get button is  Clicked";
        console.log(del);
    }
        return(
            <>
            <button style={{width: "100px", height: "40px", color: "white", borderColor: "transparent", backgroundColor: "black", marginLeft: "10px"}} onClick={handleGet}>Get</button>
            </>
        )
}
export  { Add, Edit, Delete, Get}