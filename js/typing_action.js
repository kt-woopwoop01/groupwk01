const codeLines = [
    "@keyframes fadeIn {",
    "　0% {",
    "　　opacity: 0; ",
    "　}",
    "　100% {",
    "　　opacity: 1;",
    "　}",
    "}"
];

let i = 0;
let charIndex = 0;

async function typeCode() {
    let textGroupElement = document.getElementById("codeText");
    let needCreate = true
    
    if (!textGroupElement) {
        console.error("Element with id 'codeText' not found.");
        return;
    }
    
    (async () => {
        
        let text = []
        for (let i = 0; i < codeLines.length - 1; i++) {
            let currentText = "";
            charIndex = 0;
            needCreate = true
            await new Promise(resolve => setTimeout(resolve, 300))
            text[i] = document.createElementNS("http://www.w3.org/2000/svg", "text");
            for (const char of codeLines[i]) {
                // 新しい行ごとに <text> 要素を作成
                if (needCreate) {
                    text[i] = document.createElementNS("http://www.w3.org/2000/svg", "text");
                    text[i].setAttribute("id", `text_${i}`);
                    text[i].setAttribute("style", `font-size:0.8em;`);
                    text[i].setAttribute("fill", "lime");
                    text[i].setAttribute("x", "340");
                    text[i].setAttribute("y", 30 + 20 * i);
                    textGroupElement.appendChild(text[i]);
                    needCreate = false
                }

                if (char) {
                    currentText += char;
                    text[i].textContent = currentText + "|"; // カーソル風
                    charIndex++;
                    await new Promise(resolve => setTimeout(resolve, 50))
                }
            }
            const removeCursorText = text[i].textContent.replace("|","");
            text[i].textContent = removeCursorText
        }
    })()
}
// 1秒後に実行
setTimeout(typeCode, 1000);