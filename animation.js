var span=document.querySelector(".color")



let animation=[
	{text:"N",delay:500},
	{text:"NO",delay:1000},
	{text:"NOT",delay:1500},
	{text:"NOTE",delay:2000},
	{text:"NOTES",delay:2500},
	{text:"NOTES.",delay:3000}
]

let caller=(text,delay)=>{
	setTimeout(()=>{
			span.textContent=text;

	},delay)

}
animation.forEach((element)=>{
	caller(element.text,element.delay)
})


