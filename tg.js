var a= document.getElementById("turkey")
var b= document.getElementById("mp")
var c= document.getElementById("spark")
var d= document.getElementById("family")
var e= document.getElementById("house")
var f= document.getElementById("food")
var g= document.getElementById("reset")
var z= document.getElementById("foodtitle")
var y= document.getElementById("familytitle")


function addPics () {
	a.classList.remove ("hidebox")
	a.classList.add ("cursor")
	z.classList.remove ("cursor")
	z.classList.remove ("pulse")
}

function addPics1 () {
	d.classList.remove ("hidebox")
	d.classList.add ("cursor")
	y.classList.remove ("cursor")
	y.classList.remove ("pulse")
}
function addNextPic () {
	b.classList.remove ("hidebox")
	b.classList.add ("cursor")
	a.classList.remove ("cursor")
	a.classList.remove ("pulse1")
}

function addNextPic1 () {
	e.classList.remove ("hidebox")
	e.classList.add ("cursor")
	d.classList.remove ("cursor")
	d.classList.remove ("pulse1")
}

function addLastPic () {
	c.classList.remove ("hidebox")
	b.classList.remove ("cursor")
	b.classList.remove ("pulse1")
}

function addLastPic1 () {
	f.classList.remove ("hidebox")
	e.classList.remove ("cursor")
	e.classList.remove ("pulse1")
}

function resetButton () {
	a.classList.add ("hidebox")
	b.classList.add ("hidebox")
	c.classList.add ("hidebox")
	d.classList.add ("hidebox")
	e.classList.add ("hidebox")
	f.classList.add ("hidebox")
	
	a.classList.add ("pulse1")
	b.classList.add ("pulse1")
	c.classList.add ("pulse1")
	d.classList.add ("pulse1")
	e.classList.add ("pulse1")
	f.classList.add ("pulse1")
	
	a.classList.add ("cursor")
	b.classList.add ("cursor")
	c.classList.add ("cursor")
	d.classList.add ("cursor")
	e.classList.add ("cursor")
	f.classList.add ("cursor")
	y.classList.add ("cursor")
	z.classList.add ("cursor")
	
	y.classList.add ("pulse")
	z.classList.add ("pulse")
	
	a.classList.add ("shadow")
	b.classList.add ("shadow")
	c.classList.add ("shadow")
	d.classList.add ("shadow")
	e.classList.add ("shadow")
	f.classList.add ("shadow")
	y.classList.add ("shadow")
	z.classList.add ("shadow")
}