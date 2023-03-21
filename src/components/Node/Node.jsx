import { useRef, useState, useEffect } from 'react'
import './Node.css'

const Node = ({ initialText, id, removeNode }) => {

    let z = 1;


    const nodeRef = useRef()
    const moving = useRef(false)
    const [title, setTitle] = useState(initialText)

    function handleMouseUp() {
        moving.current = false;
    }

    function handleMouseDown(event) {
        moving.current = true;
        z = z + 1;
        let newThis = nodeRef.current;
        let width = newThis.offsetWidth / 2;
        let height = newThis.offsetHeight / 2;
        document.addEventListener('mousemove', function (e) {
            if (moving.current === true) {
                var x = e.clientX - width;
                var y = e.clientY - height;
                var position = 'left:' + x + 'px;top:' + y + 'px;z-index:' + z + ';cursor:move;';
                newThis.setAttribute('style', position);
            };
        });
    };


    return (
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} ref={nodeRef} className="node">
            <span onClick={() => {
                console.log("hi")
                removeNode(id)}}>x</span>
            <h3 contentEditable suppressContentEditableWarning={true}>{title}</h3>
            <div contentEditable style={{height: "30px", width: "70px", background: "white", margin: "0 auto"}}></div>
        </div>
    )
}

export default Node;