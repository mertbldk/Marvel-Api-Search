import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
  },
  getters:{
  },
  mutations: {
  },
  actions: {

    async CharacterID(content, id) {

      const key = "0ca6791d6fec810f06f1a27df485d84b";
      const hash = "4642b4970e3f46dcd28b4e0e0a346bf8";

      return new Promise((resolve, reject) => {
          axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=${key}&hash=${hash}`)
          .then(({ data }) => {
            resolve(data);
          }).catch(({ data }) => {
            reject(data);
          })  
      })
    },

    async CharacterData(content,value){

      const key = "0ca6791d6fec810f06f1a27df485d84b";
      const hash = "4642b4970e3f46dcd28b4e0e0a346bf8";
    
      let api = await fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${value}&limit=100&ts=1&apikey=${key}&hash=${hash}`)
      let response = await api.json();

      return response;

    },
  },
  modules: {
  }
})
