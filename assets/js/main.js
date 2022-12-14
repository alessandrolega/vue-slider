var app = new Vue({
    el: '#root',
    data: {
      images: [

        {img: 'https://cdn.pixabay.com/photo/2016/01/19/19/26/amsterdam-1150319__480.jpg'},
        {img: 'https://st.depositphotos.com/1004348/4641/i/600/depositphotos_46412421-stock-photo-las-ramblas-of-barcelona-aerial.jpg'},
        {img: 'https://www.luccaindiretta.it/photogallery_new/images/2019/10/londra-viaggio-musei-cultura-lingue-jpg-4120.jpg'},
        {img: 'https://s.inyourpocket.com/gallery/110549.jpg'},
        {img: 'https://cdn.theculturetrip.com/wp-content/uploads/2017/02/gran-via-main-shopping-street-in-madrid.jpg'},
        {img: 'https://static2-viaggi.corriereobjects.it/wp-content/uploads/2018/12/iStock-Roma.jpg?v=300845'}
      ],
      indice: 0
    },
    
    methods: {
        scrollRight: function () {
            let objLenght = this.images.length - 1;
            if (this.indice >= objLenght) {
                return this.indice = 0;
            } else {
                return this.indice++;
            }
        },

        scrollLeft: function () {
            let min = 0;
            if (this.indice <= min) {
                return this.indice = this.images.length -1;
            } else {
                return this.indice--;
            }
        },
        timer : function(){
            setInterval(this.scrollRight, 3000)
        },
        
        
    },
    created(){
        this.timer()
    }
  })


  

 
