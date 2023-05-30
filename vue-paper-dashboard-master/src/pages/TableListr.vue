<template>
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
  
  <style></style>