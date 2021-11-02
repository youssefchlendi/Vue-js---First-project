const app= Vue.createApp({
    data: function (){
        return{
            cart : 0 ,
            brand : "VueJs",
            product : "Chausette",
            description :"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolores adipisci tenetur beatae velit sequi illum tempore animi impedit. Laboriosam, culpa. Voluptas temporibus magnam, pariatur odit dolores recusandae cumque consectetur?",
            link:"#",
            // inventory:100,
            selectedVarient:0,
            details:['50% coton','30% laine','20% polyester'],
            varients:[
                {id:2001,color:"green",quantity:50,image :"./assets/images/socks_green.jpg"},
                {id:2002,color:"blue",quantity:0,image :"./assets/images/socks_blue.jpg"},
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
            this.cart++;
        },
        updateVarient(arg){
            this.selectedVarient=arg;
            console.log(this.selectedVarient);
        },
        remFromCart(){
                this.cart--;
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

        }
    }
});//.mount("#app");
const mountedApp = app.mount("#app");
