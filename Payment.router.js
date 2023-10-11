import express from "express";
import paymentController from "./Payment.Controlller";

export const paymentRouter = express.Pouter();
paymentRouter.route("/create").post(paymentController.orderCreate);
paymentRouter.route("/card-deatil").post(paymentController.cardDeatil);

