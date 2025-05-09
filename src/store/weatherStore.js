//defineStore es a funcion principal de Pinia que permite crear un contenedor reactivo que puede ser compartido entre componentes
//seria como ele stado global de redux
import {defineStore} from 'pinia' 
import {ref} from 'vue'

export const useWeatherStore = defineStore("weather", ()=>{
    const temperature = ref(0)
    const humidity = ref(0)
    const time = ref(0)
    const outfitR = ref('')

    const setTemperature = (temp)=>{
        temperature.value = temp
    }
    const setHumidity = (hum) => {  
        humidity.value = hum;
    };
    const setTime = (times) => {  
        time.value = times;
    };
    const setOutfitR = (outfit)=>{
        outfitR.value = outfit
    }
    return {temperature, setTemperature, humidity, setHumidity, time, setTime, outfitR, setOutfitR}
})

