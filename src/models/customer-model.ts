import { Customer } from "../../generated/prisma";

export interface CustomerCreateRequest {
  name: string;
  phone: string;
}

export interface CustomerUpdateNameRequest {
  name: string;
}

export interface CustomerUpdatePhoneRequest {
  phone: string;
}

export interface CustomerResponse {
  id: number;
  name: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

export function toCustomerResponse(customer: Customer): CustomerResponse {
  return {
    id: customer.id,
    name: customer.name,
    phone: customer.phone,
    createdAt: customer.createdAt,
    updatedAt: customer.updatedAt
  };
}

export function toCustomerResponseList(customers: Customer[]): CustomerResponse[] {
  return customers.map((c) => toCustomerResponse(c));
}
