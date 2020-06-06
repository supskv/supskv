import { LineService } from "@app/services"

export const service = (req, res) => {
  const service = req.params.service
  try {
    switch (service) {
      case "line":
        LineService.replyMsg(req.body.events)
        break
    }
  } catch (e) {
    console.log(e)
  }

  res.sendStatus(200)
}
