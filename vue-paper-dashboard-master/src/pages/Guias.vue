<template>
    <div>
      <div class="add-city">
        <input type="text" v-model="newGuiaName" placeholder="Nome do Guia">
        <input type="text" v-model="newGuiaLanguage" placeholder="Linguagens">
        <button class="button-green" @click="addGuia">Adicionar</button>
      </div>
      
      <table class="wide-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Linguagens</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="guia in guias" :key="guia.id">
            <td>{{ guia.nome }}</td>
            <td>{{ guia.linguagens }}</td>
            <td>
              <button class="button-red" @click="removeFromLocalStorage(guia)">Remover</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        guias: [],
        newGuiaName: '',
        newGuiaLanguage: '',
      };
    },
    mounted() {
      const localStorageData = JSON.parse(localStorage.getItem('guias'));
      if (Array.isArray(localStorageData)) {
        this.guias = localStorageData;
      }
    },
    methods: {
      removeFromLocalStorage(guia) {
        const updatedGuias = this.guias.filter(item => item.id !== guia.id);
        localStorage.setItem('guias', JSON.stringify(updatedGuias));
        this.guias = updatedGuias;
      },
      addGuia() {
        if (this.newGuiaName && this.newGuiaLanguage) {
          const newGuia = {
            id: Date.now(),
            nome: this.newGuiaName,
            linguagens: this.newGuiaLanguage,
          };
          this.guias.push(newGuia);
          localStorage.setItem('guias', JSON.stringify(this.guias));
          this.newGuiaName = '';
          this.newGuiaLanguage = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .wide-table {
    width: 100%;
  }
  
  .add-city {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }
  
  .button-green {
    background-color: green;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .button-red {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  