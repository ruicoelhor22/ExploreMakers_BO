<!--<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="table1.data" :columns="table1.columns">
            </paper-table>
          </div>
        </card>
      </div>
  
      
    </div>
  </template>
  <script>
  import { PaperTable } from "@/components";
  
  export default {
    components: {
      PaperTable,
    },
    data() {
      return {
        table1: {
          title: "Guias",
          subTitle: "",
          //columns: ["Emailvis", "Cidade", "Preco", "Tipo"],
          columns: ["Day", "Year", "Month", "Emailvis"],

          data: [],
        },
        novoProfissional: {
          nome: "",
          funcao: "",
        },
      };
    },
    created() {
      this.carregarDados();
    },
    /*data() {
  return {
    table1: {
      title: "Guias",
      subTitle: "",
      columns: ["Day", "Events.Emailvis"],
      data: [],
    },
    novoProfissional: {
      nome: "",
      funcao: "",
    },
  };
},
mounted() {
  // Retrieve the Local Storage item
  const localStorageItem = JSON.parse(localStorage.getItem('yourLocalStorageItemName'));

  // Access the "day" value
  const day = localStorageItem.day;

  // Access the "events" array
  const events = localStorageItem.events;

  // Extract the "emailvis" value from the first event
  const emailvis = events[0].emailvis;

  // Update the data property with the extracted value
  this.table1.data = [{ Day: day, "Events.Emailvis": emailvis }];
},
*/
    methods: {
      carregarDados() {
        const data = localStorage.getItem("reservas");
        if (data) {
          this.table1.data = JSON.parse(data);
        }
      },
      salvarDados() {
        localStorage.setItem("reservas", JSON.stringify(this.table1.data));
      },
      adicionarProfissional() {
        if (this.validarFormulario()) {
          const novoId = this.table1.data.length + 1;
          const novoProfissional = {
            id: novoId,
            nome: this.novoProfissional.nome,
            funcao: this.novoProfissional.funcao,
          };
  
          this.table1.data.push(novoProfissional);
          this.salvarDados();
  
          this.resetarFormulario();
        }
      },
      resetarFormulario() {
        this.novoProfissional.nome = "";
        this.novoProfissional.funcao = "";
      },
      validarFormulario() {
        return this.novoProfissional.nome.trim() !== "" && this.novoProfissional.funcao.trim() !== "";
      },
    },
  };


  </script>
  
  <style></style>-->

  


<template>
  <div class="row">
    <div class="col-12">
      <h4>Pedidos de Reserva</h4>
      <card>
        <div slot="raw-content" class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID Reserva</th>
                <th>Cidade</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tabelaDados" :key="index">
                <td>{{ tabelaDados.indexOf(item)+1}}</td>
                <td>{{ item.events[0].cidade}}</td>
                <td><router-link :to="'detalhes/'+ tabelaDados.indexOf(item)">Ver Detalhes</router-link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </card>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      tabelaDados: []
    };
  },
  mounted() {
    let dadosLocalStorage = JSON.parse(localStorage.getItem('reservas'));
    console.log(dadosLocalStorage)
    if (dadosLocalStorage) {
      this.tabelaDados = dadosLocalStorage;
    }
  },
};
</script>
<style></style>

<style scoped>
.square-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.square {
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}

.square-image {
  width: 100%;
  height: auto;
}

.square-text {
  margin-top: 10px;
}

.square-buttons {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}

.button {
  margin-right: 5px;
  padding: 5px 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

th {
  background-color: #f2f2f2;
}
</style>
