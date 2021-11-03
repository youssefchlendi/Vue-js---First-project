const app1= Vue.createApp({
    data: function (){
        return{
            // cart : 0 ,
            brand : "VueJs",
            product : "Chausette",
            description :"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolores adipisci tenetur beatae velit sequi illum tempore animi impedit. Laboriosam, culpa. Voluptas temporibus magnam, pariatur odit dolores recusandae cumque consectetur?",
            link:"#",
            toAddv:0,
            // inventory:100,
            selectedVarient:0,
            details:['50% coton','30% laine','20% polyester'],
            varients:[
                {id:2002,name:'Chausette Blue',color:"blue",quantity:1,image :"./assets/images/socks_blue.png",cart:0,price:12},
                {id:2001,name:'Chausette Green',color:"green",quantity:50,image :"./assets/images/socks_green.png",cart:0,price:10},
            ],
            tailles:[
                {id:2001,taille:"30"},
                {id:2002,taille:"34"},
                {id:2003,taille:"36"},
                {id:2004,taille:"38"},
                {id:2005,taille:"42"},
            ]
        }
    },
    methods : {
        addToCart(){
            if (this.varients[this.selectedVarient].quantity-this.toAddv>=0){
            if (this.varients[this.selectedVarient].quantity){
            this.varients[this.selectedVarient].cart+=this.toAddv;
            this.varients[this.selectedVarient].quantity-=this.toAddv;
            this.toAddv=0;}}
        },
        updateVarient(arg){
            this.selectedVarient=arg;
            console.log(this.selectedVarient);
        },
        remFromCart(){
            if (this.varients[this.selectedVarient].cart!=0){
            this.varients[this.selectedVarient].cart--;
            this.varients[this.selectedVarient].quantity++;
        }
        },
        toAdd(){
            this.toAddv++;
        },
        remToAdd(){
            if (this.toAddv!=0)
                this.toAddv--;
        }
    },
    computed : {
        title(){
            return this.product+" "+this.brand;
        },
        image(){
            return this.varients[this.selectedVarient].image;
        },
        onStock(){
            return this.varients[this.selectedVarient].quantity>0?true:false;
        },
        inventory(){
            return this.varients[this.selectedVarient].quantity;
        },
        onSale(){
            return this.varients[this.selectedVarient].quantity>0?true:false;
        },
        Sale(){ 
            if (this.onSale==true)
                return this.product+" "+this.brand+" est en vente";
            else
            return this.product+" "+this.brand+" n'est pas en vente";

        },
        cart(){
            let count=0;
            for (let i = 0 ; i < this.varients.length ; i++) {
                count+=this.varients[i].cart;
            }
            // return this.varients[this.selectedVarient].cart;
            return count;
        },
        canRem(){
            return this.varients[this.selectedVarient].cart==0;
        },
        quantity(){
            return this.varients[this.selectedVarient].quantity;
        },
        total(){
            return (this.varients[0].cart*this.varients[0].price+this.varients[1].cart*this.varients[1].price);
        },
        price(){
            return this.varients[this.selectedVarient].price;
        }
    }
});//.mount("#app");
const mountedApp1 = app1.mount("#app1");