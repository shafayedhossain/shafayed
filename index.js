let interviewList = [];
let rejectedList = [];




let total = document.getElementById('total')
let inter = document.getElementById('inter');
let reject = document.getElementById('reject');

const allCardSelection = document.getElementById('allcards');
const maincontainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')

   const allfilterBtn = document.getElementById('all-filter-btn')
   const interviewfilterBtn = document.getElementById('interview-filter-btn')
   const rejectfilterBtn = document.getElementById('reject-filter-btn')

   function calculateCount(){
    total.innerText = allCardSelection.children.length
    inter.innerText = interviewList.length
    reject.innerText = rejectedList.length 
}
calculateCount()

function toggleStyle(id){
    allfilterBtn.classList.remove('bg-blue-500','text-white')
    interviewfilterBtn.classList.remove('bg-blue-500','text-white')
    rejectfilterBtn.classList.remove('bg-blue-500','text-white')
    
    allfilterBtn.classList.add('bg-gray-300','text-black')
    interviewfilterBtn.classList.add('bg-gray-300','text-black')
    rejectfilterBtn.classList.add('bg-gray-300','text-black')

    const selected = document.getElementById(id)
    // console.log(selected)

    selected.classList.remove('bg-gray-300', 'text-white')
    selected.classList.add('bg-blue-500', 'text-black')

  if(id == 'interview-filter-btn'){
    
  }

}

maincontainer.addEventListener('click',function(event){
   const enterBtn = event.target.closest('.enter');
    
console.log(!!enterBtn);
// console.log(event.target.parentNode)
   

   if(enterBtn){
   
        const parentNode = event.target.parentNode.parentNode ;
const mobileName = parentNode.querySelector('.mobileName').innerText;
const latinName = parentNode.querySelector('.latinName').innerText;
const remote = parentNode.querySelector('.remote').innerText;
const time = parentNode.querySelector('.time').innerText;
const dollar = parentNode.querySelector('.dollar').innerText;
const status = parentNode.querySelector('.status').innerText;
const notes = parentNode.querySelector('.notes').innerText;

    console.log(parentNode, mobileName, latinName, remote, time,dollar, status,notes)


const cardInfo ={
    mobileName,
    latinName,
    remote,
    time,
    dollar,
    status,
    notes
}
// interviewList.find(item.mobileName == cardInfo.mobileName)
const mobileExist = interviewList.find(item=> item.mobileName == cardInfo.mobileName);
if(!mobileExist){
    interviewList.push(cardInfo)
}

    renderInterview();

    }
})


   






function renderInterview(){
  filterSection.innerHTML = ''
  
  for(let interview of interviewList){
    console.log(interview);
    let div = document.createElement('div')
  div.className = 'card flex justify-between border border-0 p-8 shadow mb-3'
  div.innerHTML = `  <div class="space-y-5">
             <div>
            <h1 class="mobileName text-4xl">Mobile First Corp</h1>
            <p class="latinName">React Native Developer</p>
            </div>
            <div class="flex gap-3 text-gray-400">
                <p class="remote">Remote</p>
                <p class="time">• Full-time </p>
                <p class="dollar">• $130,000 - $175,000</p>
            </div>
           <div>
             <p class="status text-gray-500 w-[9rem] bg-gray-100 px-4 py-2">Not Applied</p>
            <p class="notes">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
           
           </div>
           <div class="flex gap-3">
            <button class="enter text-green-500 px-4 py-2 border border-2">Interview</button>
            <button class="reject text-red-500 px-4 py-2 border border-2">Rejected</button>
           </div>
   </div>
   <!-- right side  -->
   <div>
 <button class="delete-btn w-[2.5rem] rounded-full border border-gray-400 px-2.5 py-2.5"><i class="fa-regular fa-trash-can"></i></button>
   </div>
  `
  filterSection.appendChild(div)
}
}
