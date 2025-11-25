import express from "express"
import { authMiddleware } from "../middlewares/auth-middleware"

import { CustomerController } from "../controllers/customer-controller"
import { RestaurantController } from "../controllers/restaurant-controller"
import { OrderController } from "../controllers/order-controller"

export const privateRouter = express.Router()

privateRouter.use(authMiddleware)

// CUSTOMER
privateRouter.get("/customers", CustomerController.getAll)
privateRouter.get("/customers/:id", CustomerController.getOne)
privateRouter.post("/customers", CustomerController.create)
privateRouter.patch("/customers/:id", CustomerController.updateCustomer)
privateRouter.delete("/customers/:id", CustomerController.delete)

// RESTAURANT
privateRouter.get("/restaurants", RestaurantController.getAll)
privateRouter.get("/restaurants/:id", RestaurantController.getOne)
privateRouter.get("/restaurants/status/:isOpen", RestaurantController.getByStatus)
privateRouter.post("/restaurants", RestaurantController.create)
privateRouter.patch("/restaurants/:id", RestaurantController.updateRestaurant)
privateRouter.delete("/restaurants/:id", RestaurantController.delete)

// ORDERS
privateRouter.get("/orders", OrderController.getAll)
privateRouter.get("/orders/:id", OrderController.getOne)
privateRouter.get("/orders/by-customer/:customerId", OrderController.getByCustomer)
privateRouter.get("/orders/by-restaurant/:restaurantId", OrderController.getByRestaurant)
privateRouter.post("/orders", OrderController.create)
