export class Order {
    id?: number;
    orderName!: string;
    price!: number;
    isDiscounted!: boolean;
    discountPercentage: number = 5
}
