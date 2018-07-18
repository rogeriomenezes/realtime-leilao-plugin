/**
 * Trata dados recebidos do Comunicator para apresentação visual
 * https://github.com/rogeriomenezes/comunicator/blob/master/index.js
 */
export default {
  data: function () {
    return {
      leilao: {},
      pregao: null,
      lote: {
        numero: 0,
        imagem: null,
        descricao: '-',
        valorInicial: 0.00,
        valorIncremento: 0.00,
        valorMinimo: 0.00,
        valorMeta: 0.00,
        lancePrincipal: null, // TODO: Verificar real necessidade disto
        status: null,
        comitente: {
          pessoa: {}
        },
        pregao: null,
        lances: []
      }
    }
  },
  props: {},
  computed: {},
  methods: {
    /**
     * Quando o sistema recebe um novo lance em um lote.
     * Este evento deve desencadear as seguintes ações:
     * 1) Atualizar a lista de lances
     * 2) Atualizar o status do pregão conforme status recebido
     * 3) Atualizr o cronômetro do pregão do lote, caso o status permita
     * @param data
     */
    onLance: function (data) {
    },

    /**
     * Quando o status de um lote é alterado.
     * @param data
     */
    onStatusLote: function (data) {
    },

    /**
     * Quando o status de um leilão é alterado.
     * @param data
     */
    onStatusLeilao: function (data) {
    },

    /**
     * Quando o controlador renova o tempo.
     * @param data
     */
    onTempo: function (data) {
    },

    /**
     * Quando o pregão muda de lote.
     * @param data
     */
    onMudaLote: function (data) {
    },

    /**
     * Quando o controlador deleta um lance.
     * @param data
     */
    onLanceDeletado: function (data) {
    },

    /**
     * Quando o incremento mínimo do lote é alterado.
     * @param data
     */
    onAlteracaoIncremento: function (data) {
    },

    /**
     * Quando o tempo do pregão do leilão é alterado.
     * @param data
     */
    onAlteracaoTempo: function (data) {
    },

    /**
     * Quando um comitente toma uma decisão de aprovar, rejeitar ou condicionar um lance em um determinado lote.
     * @param data
     */
    onComitenteDecisaoStatusLote: function (data) {
    },

    /**
     * Valida se o evento recebido do leilão é o que o ouvinte está inscrito
     * Uma View pode acompanhar somente um leilão, então, somente eventos deste leilão devem ser tratados e apresentados.
     * @param event
     * @return {boolean}
     */
    validateComunication: function (event) {
      if (typeof event['leilao'] === 'undefined') {
        return false
      }
      if (typeof event['leilao']['id'] !== 'undefined') {
        return event['leilao']['id'] === this.leilao.id
      }
      return event['leilao'] === this.leilao.id
    },

    /**
     * Valida se o evento recebido do lote é o que o ouvinte está inscrito
     * Uma View atualmente somente pode tratar e apresentar dados de lote que ela está visualizando (1 lote)
     * @param event
     * @return {boolean}
     */
    validateComunicationLote: function (event) {
      if (typeof event['lote'] === 'undefined') {
        return false
      }
      if (typeof event.lote['id'] === 'undefined') {
        if (event.lote === this.lote.id) {
          return true
        }
      } else {
        if (event.lote.id === this.lote.id) {
          return true
        }
      }
      return false
    }
  },
  created () {
    console.log('Mixin loaded')
  }
}
