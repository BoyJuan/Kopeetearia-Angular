import { Order } from "./order";

export class OrderBill {
    constructor(
        public orderList: Order[],
        public clerk: string,
        public totalBill: number
      ){}
}
