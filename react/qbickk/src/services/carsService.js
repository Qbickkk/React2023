import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const carsService   = {
    getAllCars: ()=> axiosService.get(urls.cars.base),
    createCar: (car)=> axiosService.post(urls.cars.base, car),
    updateById: (id, car)=>axiosService.put(urls.cars.byId(id), car),
    deleteById: (id)=> axiosService.delete(urls.cars.byId(id))
};

export {
    carsService
}