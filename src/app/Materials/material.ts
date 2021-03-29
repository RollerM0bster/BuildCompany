
/*Entity - материал
Атрибуты: 
id
name - наименование
measure - единица измерения(шт., кг. и т.д)
unitPrice - цена за единицу 
quantity - количество на складе 
*/
export class Material {
    id:number;
    name:string;
    measure: string;
    unitPrice:number;
    quantity:number;  
}
