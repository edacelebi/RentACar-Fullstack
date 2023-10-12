import { Brand } from "../../features/brand/models/brand"

export interface Model {
    id:number
    name:string
    //brandId:number
    brand:Brand
}
