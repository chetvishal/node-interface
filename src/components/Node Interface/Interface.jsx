
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
        setNodeList(list => ([...list, {initialText, id: Math.round((Math.random() * 10000000))}]))
    }

    const removeNode = (id) => {
        const tempList = nodeList.filter(item => item.id != id);
        setNodeList(() => tempList)
    }

    return(
        <div className="node_interface_container">
            <svg class="global_canvas"></svg>
            {
                nodeList.map(item => (
                    <Node 
                        initialText={item.initialText} 
                        id={item.id} 
                        removeNode={removeNode}
                        suppressContentEditableWarning={true}
                        />
                ))
            }
            <button onClick={() => {
                addNode()
            }}>add node</button>
            <input placeholder="Add Title..." type="text" onChange={(e) => setInitialText(e.target.value)}/>
        </div>
    )
}

export default NodeInterface;