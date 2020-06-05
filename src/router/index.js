import express from "express"
import * as WebhookController from "@app/http/controllers/WebhookController"

const router = express.Router()

// Home page route.
router.get("/", function (req, res) {
  res.send("Wiki home page")
})

// About page route.
router.get("/about", function (req, res) {
  res.send("About this wiki")
})

router.post("/webhook/:service", WebhookController.service)

export default router
