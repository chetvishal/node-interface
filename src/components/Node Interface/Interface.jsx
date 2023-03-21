
import './Interface.css'
import Node from '../Node/Node';
import Edge from '../Edge/Edge';
import { useRef, useState } from 'react';
const NodeInterface = () => {
    const ref1 = useRef()
    const ref2 = useRef()
    const [nodeList, setNodeList] = useState([])
    const [initialText, setInitialText] = useState("")

    const addNode = () => {
        setNodeList(list => ([...list, initialText]))
    }

    return(
        <div className="node_interface_container">
            <svg class="global_canvas"></svg>
            {
                nodeList.map(item => (
                    <Node initialText={item}/>
                ))
            }
            <button onClick={() => {
                addNode()
            }}>clicke me</button>
            <input type="text" onChange={(e) => setInitialText(e.target.value)}/>
        </div>
    )
}

export default NodeInterface;