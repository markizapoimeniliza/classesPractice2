//2 practice


//output picture by elements - 3 homes + moon 

let House1 =  document.querySelector("#house1")
let House2 =  document.querySelector("#house2")
let House3 =  document.querySelector("#house3")
let moon =  document.querySelector("#moon")

// House1.addEventListener("mouseover",()=> {
    
// })

class Elemen{
    constructor(value1){
         this.$el = document.getElementById(value1)
    }
    static type = "animation"

}

class Pictures extends Elemen{
    constructor(pictures){
         super(pictures.value1)
         this.Img = pictures.img //content of this object 
         //Img for a class
         //img for a parameter
         
    }
}

const house1 = new Pictures({ //properties of a class!
      value1: "house1",
      img: "https://media.istockphoto.com/photos/house-picture-id171379069?k=20&m=171379069&s=612x612&w=0&h=XjeFrnna5Bj2ifGejf1pcjk1iD4svHWqpklkYyUGfzU="
})



const house2 = new Pictures({ //2 html elements
      value1: "house2",
      img: "https://media.istockphoto.com/photos/two-story-house-blue-picture-id156528278?k=20&m=156528278&s=612x612&w=0&h=ap5bUcWxlEWXgRhJOkujQLc2b80VuCK_2yKeujPTNr0="
})


const house3 = new Pictures({
      value1: "house3",
      img: "https://media.istockphoto.com/photos/craftsman-style-house-on-white-background-picture-id1129464691?k=20&m=1129464691&s=612x612&w=0&h=RbR3d9-q1-bOsAx4QS5FBdYFp4ykBJ2kK57FQ5b7BIA="
})


const Moon = new Pictures({
      value1: "moon",
      img: "https://www.kindpng.com/picc/m/79-792475_crescent-clip-arts-crescent-moon-on-white-background.png"
})

//4 in one place - without positions
House1.innerHTML = `<img  style = 'position: relative ; top: 10px' src = "${house1.Img}" >`
House2.innerHTML = `<img  style = 'position: relative ; top: 10px' src = "${house2.Img}" >`
House3.innerHTML = `<img  style = 'position: relative; ' src = "${house3.Img}" >`
moon.innerHTML = `<img style = 'position: relative; ' src = "${Moon.Img}" >`

//this.img = this.img? +++++++
//not working with img?
//4 houses in one?

//JS AFTER HTML = the last result

//will execute JS if it doesnt have any errors in HTML self closing tag/void tags will not redirect to JS