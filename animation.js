var span=document.querySelector(".color")



let animation=[
	{text:"P",delay:500},
	{text:"PR",delay:1000},
	{text:"PRO",delay:1500},
	{text:"PROG",delay:2000},
	{text:"PROGR",delay:2500},
	{text:"PROGRA",delay:3000},
	{text:"PROGRAM",delay:3500},
	{text:"PROGRAMZ",delay:4000},
	{text:"PROGRAMZ.",delay:4500}
]

let caller=(text,delay)=>{
	setTimeout(()=>{
			span.textContent=text;

	},delay)

}
animation.forEach((element)=>{
	caller(element.text,element.delay)
})
