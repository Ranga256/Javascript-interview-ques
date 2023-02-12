function getNodeValue(){
    const rootA = document.getElementById('rootA');
    const rootB = document.getElementById('rootB');
    const nodeA = document.getElementById('nodeA');
    const path = findPathParent(rootA,nodeA);
    return findNodebValue(rootB,path);
}

function findPathParent(parent,child){
    let currNode = child;
    let path = [];
    while(currNode !== parent){
        const parNode = currNode.parentElement;
        let childArray = Array.from(parNode.children);
        path.push(childArray.indexOf(currNode));
        currNode = parNode;
    }
    return path;
}

function findNodebValue(parent,path){
    let currNode = parent;
    while(path.length){
        currNode = currNode.children[path.pop()];
    }
    return currNode.innerHTML;
}

console.log(getNodeValue());