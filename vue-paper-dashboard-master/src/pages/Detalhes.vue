<!--<template>
    <card class="card" :title="`Detalhes Reserva #${index + 1}`">
      <div>
        <form @submit.prevent>
          <div class="row">
            <div class="col-md-5">
              <label>Atividade</label>
              <div class="dados">
                <p>{{ reservas.id }}</p>
              </div>
            </div>
            <div class="col-md-5">
              <label>Estado</label>
              <div class="dados">
                <p>{{ reservas.estado }}</p>
              </div>
            </div>
            <div class="col-md-2">
              <label>Total</label>
              <div class="dados">
                <p>{{ reservas.total }}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </card>
  </template>
  
  <script>
  export default {
    data() {
      const idMarcacao = this.$route.params.id;
      let marcacoesData = JSON.parse(localStorage.getItem("reservas")) || {};
      return {
        reservas: marcacoesData.find(objeto => objeto.id === idMarcacao) || {},
        funcionarioSelecionado: null,
        type: ["", "info", "success", "warning", "danger"],
      };
    },
  } 
  </script>-->

 
  
<template>
    <card class="card" :title="`Dados Reserva #${reservas.events[0].emailvis}`">
        <div>
            <form @submit.prevent>
                <div class="row">
                    <div class="col-md-4">
                        <label>Atividade</label>
                        <div class="dados">
                            <p>{{ reservas.events[0].tipo }}</p>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <label>Cliente</label>
                        <div class="dados">
                            <p>{{ reservas.events[0].emailvis }}</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label>Nome</label>
                        <div class="dados">
                            <p>{{ reservas.events[0].nome }}</p>
                        </div>
                    </div>
                </div>
                <h1 class="dados_cat">Atividades</h1>
                <div class="row">
                    <!--<div class="col-md-2">
                  <label>Atividade</label>
                  <div class="dados">
                    <p>{{ reservas.atividades[0].id }}</p>
                  </div>
                </div>-->

                    <div class="col-md-3">
                        <label>Dia</label>
                        <div class="dados">
                            <p>{{ reservas.day }}</p>
                        </div>
                    </div>


                    <div class="col-md-3">
                        <label>Mês</label>
                        <div class="dados">
                            <p>{{ reservas.month }}</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label>Ano</label>
                        <div class="dados">
                            <p>{{ reservas.year }}</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label>Preço</label>
                        <div class="dados">
                            <p>{{ reservas.events[0].preco }}</p>
                        </div>
                    </div>
                </div>

               
                <h1 class="dados_cat">Gestor atribuido</h1>
                <div class="row">
                    <div class="col-md-2">
                        <label>Atividade</label>
                        <div class="dados">
                            <p>{{ reservas.events[0].guia }}</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Atribua um funcionário responsável</label>
                            <select class="custom-select" v-model="funcionarioSelecionado">
                                <option disabled value="">Selecione uma opção</option>
                                <option v-for="guia in guias" :key="guia.id" :value="guia.nome">{{ guia.nome }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <div class="row">
                        <div class="col-md-6">
                            <p-button type="success" round @click.native.prevent="confirmarReserva">
                                Confirmar
                            </p-button>
                        </div>
                        <!--<div class="col-md-6">
                            <p-button type="danger" round @click.native.prevent="rejeitarReserva">
                                Rejeitar
                            </p-button>
                        </div>-->
                    </div>

                </div>
                <div class="clearfix"></div>
            </form>
        </div>
    </card>
</template>
  
<script>

export default {
    data() {
        const idMarcacao = this.$route.params.id;
        let marcacoesData = JSON.parse(localStorage.getItem("reservas")) || {};
        let gestoresData = JSON.parse(localStorage.getItem("guias")) || [];
        return {
            reservas: marcacoesData.find(objeto => objeto.id === idMarcacao) || {},
            guias: gestoresData,
            funcionarioSelecionado: null,
            type: ["", "info", "success", "warning", "danger"],
        };
    },
    methods: {
        confirmarReserva() {
            // Obtenha os dados da reserva atual do Local Storage
            let reservasData = JSON.parse(localStorage.getItem("reservas")) || [];

            // Atualize o estado da reserva para "aceite"
            this.reservas.estado = "Aceite";

            // Armazene o gestor selecionado na reserva
            this.reservas.events[0].guia = this.funcionarioSelecionado;

            // Atualize os dados da reserva no Local Storage
            const index = reservasData.findIndex(item => item.id === this.reservas.id);
            if (index !== -1) {
                reservasData[index] = this.reservas;
            }

            localStorage.setItem("reservas", JSON.stringify(reservasData));

            // Redirecione o usuário para outra página, se necessário
            // Adicione o código de redirecionamento aqui, se necessário
        },
        /*rejeitarReserva() {
            // Obtenha os dados da reserva atual do Local Storage
            let reservasData = JSON.parse(localStorage.getItem("reservas")) || [];

            // Atualize o estado da reserva para "rejeitado"
            this.reservas.estado = "Rejeitado";

            // Atualize os dados da reserva no Local Storage
            const index = reservasData.findIndex(item => item.id === this.reservas.id);
            if (index !== -1) {
                reservasData[index] = this.reservas;
            }

            localStorage.setItem("reservas", JSON.stringify(reservasData));
        }*/
    }
}
</script>
  
<style>
.dados {
    background-color: #F4F3EF;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

.dados p {
    padding: 10px 0px 10px 20px;
    font-size: 14px;
    font-weight: 400;
    color: #9A9A9A;
}

.dados_cat {
    font-size: 20px;
    color: #9A9A9A;
}
</style>