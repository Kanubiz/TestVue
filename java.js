const app = new Vue({
  el: '#app',
  data: {
    nome: 'Duarte',
    idade: 25,
    ocupacao: 'Ninja',
    espaco: '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>',
    website: 'http://www.google.pt',
    websiteTag: '<a href="http://www.google.pt">Vamos ao Google</a>',
    x: 0,
    y: 0,
    name: '',
    age: '',
    a: 0,
    b: 0,
    ag: 20
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.nome
    },
    add: function(inc) {
      this.idade += inc;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function() {
      if (this.idade >= 18) {
        alert("Você tem mais de 18 anos, mas não vou deixar na mesma");

      } else {
        alert("Você é um menor!");
      }
    },
    /*addToA: function(){
      console.log('A');
      return this.a + this.ag;
    },
    addToB: function(){
      console.log('B');
      return this.b + this.ag;
    }*/
  },
  computed: {
    addToA: function() {
      console.log('A');
      return this.a + this.ag;
    },
    addToB: function() {
      console.log('B');
      return this.b + this.ag;
    }
  }
});
