import Graph from "../components/graph2";

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