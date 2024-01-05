import Graph from "../components/graph";

function Traffic(){
    var data = [];
    console.log("after fetch")
    return (
        <>
            <Graph load={data}/>
        </>
    )
}

export default Traffic