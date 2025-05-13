//main.js
const customTag = {
    tagName: "h1",//value: 태그 이름
    textContent: "타코야끼 먹고싶당",//value: 태그에 들어갈 텍스트
    styles: {
        color: 'blue',//글자의 색
        fontSize: '50px',//글자 크기
    },
    id: "", //태그의 id
    class: [], //태그의 클래스들
    changeTagName(newTagName) { //태그의 tagName을 바꾸는 함수
        this.tagName = newTagName;
    },
    changeTextContent(newText) { //태그의 textContent를 바꾸는 함수
        this.textContent = newText;
    } , 
    changeStyles(property, value) {//태그의 스타일을 바꾸는 함수
        this.styles[property] = value;
    } , 
    setId(newId) {  //태그의 아이디를 바꾸는 함수
        this.id = newId;
    }, 
    addClassName(className) {//태그의 클래스 이름를 추가하는 함수
        if (!this.class.includes(className)) {
            this.class.push(className);
        }
    }, 
    removeClassName(className) { //태그의 특정 클래스 이름를 제거하는 함수
        this.class = this.class.filter(cls => cls !== className);
    },

    // 여기 아래 부분은 수정하지 마시오.
    toHTML() {
        // 클래스 문자열 생성
        const classString = this.class.length > 0 ?
            ` class="${this.class.join(' ')}"` : '';

        // ID 문자열 생성
        const idString = this.id ? ` id="${this.id}"` : '';

        // 스타일 문자열 생성
        let styleString = '';
        for (const property in this.styles) {
            styleString += `${(property == 'fontSize') ? 'font-size' : property}: ${this.styles[property]}; `;
        }
        styleString = styleString ? ` style="${styleString.trim()}"` : '';

        // 완성된 HTML 태그 반환
        return `<${this.tagName}${idString}${classString}${styleString}>${this.textContent}</${this.tagName}>`;
    },
    // DOM에 렌더링
    render(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            // 기존 내용을 지우고 새로 렌더링
            container.innerHTML = '';
            // 새 HTML 태그 추가
            container.innerHTML += this.toHTML();
        } else {
            console.error(`Container with ID "${containerId}" not found.`);
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    customTag.render('container');
});