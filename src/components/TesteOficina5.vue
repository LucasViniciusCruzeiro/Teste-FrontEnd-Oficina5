<template>
  <div class="hello">
    <div>
      <b-navbar type="warning" variant="warning">
        <b-navbar-brand tag="h1" class="mb-0">Oficina5</b-navbar-brand>
      </b-navbar>
    </div>

    <div class="corpo">
      <br>

      <b-button variant="warning" @click="disabled1 = (disabled1 + 1) % 2" >Mural de Postagens</b-button>
      <b-button variant="warning" @click="disabled2 = (disabled2 + 1) % 2" >Postagem N°1</b-button>
      <b-button variant="warning" @click="disabled3 = (disabled3 + 1) % 2" >Comentario Postagens N°1</b-button>
      <b-button variant="warning" @click="disabled4 = (disabled4 + 1) % 2" >Álbuns</b-button>
      <b-button variant="warning" @click="disabled5 = (disabled5 + 1) % 2" >Fotos</b-button>

      <div v-if="disabled1==1">

        <br>

        <b-card
          title="Posts"
          tag="article"
          class="mb-2"
          v-for="item in this.posts" 
                        :key="item.id"
                        :value="item.id"
        >
          <b-card-text>
            <h5>Usuario:
              {{item.userId}}
            </h5>
            <p>Título:
              {{item.title}}
            </p>
            <p>Descrição:
              {{item.body}}
            </p>
          </b-card-text>
        </b-card>
      </div>

      <div v-if="disabled2==1" >

        <br>

        <b-card
          title="Post N°1"
          tag="article"
          class="mb-2"
        >
          <b-card-text>
            <h5>Usuario:
              {{post1.userId}}
            </h5>
            <p>Título:
              {{post1.title}}
            </p>
            <p>Descrição:
              {{post1.body}}
            </p>
          </b-card-text>
        </b-card>
      </div>

      <div v-if="disabled3==1">

        <br>

        <b-card
          title="Comentario Posts"
          tag="article"
          class="mb-2"
          v-for="item2 in this.commentsId1" 
                        :key="item2.id"
                        :value="item2.id"
        >
          <b-card-text>
            <h5>Nome:
              {{item2.name}}
            </h5>
            <p>Email:
              {{item2.email}}
            </p>
            <p>Descrição:
              {{item2.body}}
            </p>
          </b-card-text>
        </b-card>
      </div>

      <div v-if="disabled4==1">

        <br>

        <b-card
          title="Álbuns"
          tag="article"
          class="mb-2"
          v-for="item3 in this.albuns" 
                        :key="item3.id"
                        :value="item3.id"
        >
          <b-card-text>
            <h5>Nome:
              {{item3.userId}}
            </h5>
            <p>Titulo:
              {{item3.title}}
            </p>
          </b-card-text>
        </b-card>
      </div>

      <div v-if="disabled5==1">

        <br>

        <b-card
          title="Fotos"
          tag="article"
          class="mb-2"
          v-for="item4 in this.fotos" 
                        :key="item4.id"
                        :value="item4.id"
        >
          <b-card-text>
            <h5>Álbum N°:
              {{item4.albumId}}
            </h5>
            <p>Titulo:
              {{item4.title}}
            </p>
            <p>Url:
              {{item4.url}}
            </p>
            <p>Url Thumbnail:
              {{item4.thumbnailUrl}}
            </p>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>

import postagens from "../services/postagens.js";

export default {
  data(){
    return {
      disabled1: 0,
      disabled2: 0,
      disabled3: 0,
      disabled4: 0,
      disabled5: 0,
      posts: [],
      post1: [],
      commentsId1: [],
      albuns: [],
      fotos: []
    };
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    this.retornarPostagens();
    this.retornarPostagensId1();
    this.retornarComentariosId1();
    this.retornarAlbuns();
    this.retornarFotos();
  },
  methods: {
    retornarPostagens() {
      postagens.getAll().then(res => {
        this.posts = res.data;
      });
    },
    retornarPostagensId1() {
      postagens.getId1().then(res => {
        this.post1 = res.data;
      })
    },
    retornarComentariosId1() {
      postagens.getCommentsId1().then(res => {
        this.commentsId1 = res.data;
      })
    },
    retornarAlbuns(){
      postagens.getAlbunsId1().then(res => {
        this.albuns = res.data;
      })
    },
    retornarFotos(){
      postagens.getPhotosId1().then(res => {
        this.fotos = res.data;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.corpo{
  width: 90%;
  padding-left: 10%;
}
button{
  margin-right: 10px;
  margin-top: 6px;
}
</style>
