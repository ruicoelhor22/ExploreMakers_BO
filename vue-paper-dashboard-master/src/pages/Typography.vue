<template>
  <div>
    <div class="add-city">
      <input type="text" v-model="newCityName" placeholder="Nome da Cidade">
      <input type="text" v-model="newCityCountry" placeholder="País">
      <button class="button-green" @click="addCity">Adicionar</button>
    </div>
    
    <table class="wide-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>País</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="square in squares" :key="square.id">
          <td>{{ square.nome1 }}</td>
          <td>{{ square.pais }}</td>
          <td>
            <button class="button-red" @click="removeFromLocalStorage(square)">Remover</button>
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
      squares: [],
      newCityName: '',
      newCityCountry: '',
    };
  },
  mounted() {
    const localStorageData = JSON.parse(localStorage.getItem('cidades'));
    if (Array.isArray(localStorageData)) {
      this.squares = localStorageData;
    }
  },
  methods: {
    removeFromLocalStorage(square) {
      const updatedSquares = this.squares.filter(item => item.id !== square.id);
      localStorage.setItem('cidades', JSON.stringify(updatedSquares));
      this.squares = updatedSquares;
    },
    addCity() {
      if (this.newCityName && this.newCityCountry) {
        const newCity = {
          id: Date.now(),
          nome1: this.newCityName,
          pais: this.newCityCountry,
        };
        this.squares.push(newCity);
        localStorage.setItem('cidades', JSON.stringify(this.squares));
        this.newCityName = '';
        this.newCityCountry = '';
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
