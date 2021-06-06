let today_date = new Date();
let year = today_date.getFullYear();
let month = today_date.getMonth()+1;
let date = today_date.getDate();
const titleText=document.querySelector("#title_txt");
const titleDate = document.getElementById("title_date");
let creatBtn = document.querySelector("#btn_create");
const content_box = document.querySelector(".content_box");


console.log("년:" + year);
console.log("월:" + month);
console.log("일:" + date);

const today = document.querySelector(".today");
todayChildren= today.querySelectorAll("div.today > span");
todayChildren[0].innerText = year;
todayChildren[1].innerText = month;
todayChildren[2].innerText = date;

function createDiv(){
  //요소들 생성하기  
  const newDiv = document.createElement('div');
  const newTitle = document.createElement('div');
  const newContent = document.createElement('div');
  const delbtn = document.createElement('button');

  //delbtn안에 이모지(❌) 넣기, delbtn버튼 클릭시 deleteDiv함수 호출
  delbtn.innerText="❌";
  delbtn.addEventListener("click",deleteDiv);

  //newDiv 요소 끝에 newTitle, newContent, delbtn을 차례로 붙이기 
  newDiv.appendChild(newTitle);
  newDiv.appendChild(newContent);
  newDiv.appendChild(delbtn);

  //setAttribute 지정된 요소의 속성값 설정하기  Element.setAttribute(name, value); 클래스 속성값과 그 이름을 지정해줌.
  newDiv.setAttribute("class","content");
  newTitle.setAttribute("class","cont_title");
  newContent.setAttribute("class","cont_content");
  delbtn.setAttribute("class","delbtn");

  //calculator함수 호출(매개변수로 titleDate.value값 전달)
  const dday = calculator(titleDate.value);

  //newTitle과 newContent자리에 titleText.value와 dday+"일"보여주기
  newTitle.innerHTML = titleText.value;
  newContent.innerHTML = dday+"일";

  //content_box 요소 끝에 위에서 생성한 newDiv붙이기
  content_box.appendChild(newDiv);

}

function calculator(date){
    //dday로 지정한 날은 input type=date로 지정한 날인데 이게 string형태라서 date를 생성해줌.
  const targetDate = new Date(date);

    //new Date로 생성하면 Sun May 09 2021 17:08:05 이런 식이여서 이걸 getTime()함수를 써서 숫자로 표시
    //참조사이트 : MDN    ->>>>      dateObj.getTime()는 Return value는
    //1970 년 1 월 1 일 00:00:00 UTC와 주어진 날짜 사이의 경과 시간 (밀리 초)을 나타내는 숫자입니다.
    let dDayMs = targetDate.getTime()- today_date.getTime();

    //리턴값이 밀리초 이므로 이걸 다시 일 로 바꾸려고 1000*60*60*24로 나눠줌 (Meth.ceil 나머지 없애려고 올림)
    let dDay = Math.ceil(dDayMs/(1000*60*60*24));   

   return dDay;
}

function deleteDiv(event){
    //삭제 버튼을 클릭하면  그 버튼이 누구인지 구하기
    const btn = event.target;

    //그 버튼의 부모노드 (div)가 누구인지 찾기
    const div = btn.parentNode;

    //content_box에서 해당 div를 제거
    content_box.removeChild(div);
}

function handleSubmit(event){
    event.preventDefault();

    //createDiv함수 호출
    createDiv();        

    //titleText값과 titleDate값을 초기화 시키기(값 지우기)
    titleText.value="";
    titleDate.value="";
}

function init(){
    //creatBtn클릭시 handleSubmit함수 호출
    creatBtn.addEventListener('click', handleSubmit)
}

//init() 함수 호출이 start!!!
init();