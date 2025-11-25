import { Restaurant } from "../../generated/prisma";

export interface RestaurantCreateRequest {
  name: string;
  description: string;
  isOpen: boolean;
}

export interface RestaurantUpdateNameRequest {
  name: string;
}

export interface RestaurantUpdateDescriptionRequest {
  description: string;
}

export interface RestaurantUpdateStatusRequest {
  isOpen: boolean;
}

export interface RestaurantResponse {
  id: number;
  name: string;
  description:  string | null;
  isOpen: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export function toRestaurantResponse(restaurant: Restaurant): RestaurantResponse {
  return {
    id: restaurant.id,
    name: restaurant.name,
    description: restaurant.description,
    isOpen: restaurant.isOpen,
    createdAt: restaurant.createdAt,
    updatedAt: restaurant.updatedAt
  };
}

export function toRestaurantResponseList(restaurants: Restaurant[]): RestaurantResponse[] {
  return restaurants.map((r) => toRestaurantResponse(r));
}
