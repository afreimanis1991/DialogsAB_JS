// const p = document.createElement("p");
// p.textContent ="Once upon a time...";

// console.log(p.nodeType);
// console.log(p.textContent);

const firstChildNode = document.documentElement.firstChild;
if (firstChildNode.nodeType !== Node.COMMENT_NODE ) {
    console.warn("You should comment your code!");
    console.log(firstChildNode.nodeType);
    console.log(firstChildNode.nodeName);
    console.log(firstChildNode.nodeValue);
}
else {
    console.log("Good! :) code is commented/described");
    console.log(firstChildNode.nodeType);
    console.log(firstChildNode.nodeName);
    console.log(firstChildNode.nodeValue);
    }

    const secondChildNode = firstChildNode.nextSibling;
    console.log(secondChildNode.nodeType);
    console.log(secondChildNode.nodeName);
    console.log(secondChildNode.nodeValue);

    const thrirdChildNode = secondChildNode.nextSibling;
    console.log(thrirdChildNode.nodeType);
    console.log(thrirdChildNode.nodeName);
    console.log(thrirdChildNode.nodeValue);

    const fourthChildNode = thrirdChildNode.nextSibling;
    console.log(fourthChildNode.nodeType);
    console.log(fourthChildNode.nodeName);
    console.log(fourthChildNode.nodeValue);

    const fifthChildNode = fourthChildNode.nextSibling;
    console.log(fifthChildNode.nodeType);
    console.log(fifthChildNode.nodeName);
    console.log(fifthChildNode.nodeValue);

    const lastChildNode = document.documentElement.lastChild;
    console.log("\n");
    console.log(lastChildNode.nodeType);
    console.log(lastChildNode.nodeName);
    console.log(lastChildNode.nodeValue);

