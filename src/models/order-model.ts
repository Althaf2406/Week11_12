import { Order, Customer, Restaurant } from "../../generated/prisma";

export interface OrderCreateRequest {
  customerId: number;
  restaurantId: number;
  items: number;
}

export interface OrderResponse {
  id: number;
  items: number;
  createdAt: Date;
  eta: number;

  customer: {
    id: number;
    name: string;
    phone: string;
  };

  restaurant: {
    id: number;
    name: string;
    description: string | null;
    isOpen: boolean;
  };
}

export function toOrderResponse(order: Order & { customer: Customer; restaurant: Restaurant }): OrderResponse {
  return {
    id: order.id,
    items: order.items,
    createdAt: order.orderedAt,   // pakai orderedAt
    eta: order.etaMinutes,        // pakai etaMinutes

    customer: {
      id: order.customer.id,
      name: order.customer.name,
      phone: order.customer.phone,
    },

    restaurant: {
      id: order.restaurant.id,
      name: order.restaurant.name,
      description: order.restaurant.description,
      isOpen: order.restaurant.isOpen,
    }
  };
}


export function toOrderResponseList(
  orders: (Order & { customer: Customer; restaurant: Restaurant })[]
): OrderResponse[] {
  return orders.map((o) => toOrderResponse(o));
}
