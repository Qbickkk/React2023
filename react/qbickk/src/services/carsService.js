import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const carsService = {
    getAll: ()=>axiosService.get(urls.cars.base),
    postCar: (car) => axiosService.post(urls.cars.base, car),
    updateById: (id, data)=> axiosService.put(urls.cars.byId(id), data),
    deleteById: (id)=>axiosService.delete(urls.cars.byId(id))
}

export {
    carsService
}