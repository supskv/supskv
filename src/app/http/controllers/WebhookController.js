import { LineService } from "@app/services"

export const service = (req, res) => {
  const service = req.params.service
  switch (service) {
    case "line":
      LineService.replyMsg(req.body.events[0])
      break
  }

  res.sendStatus(200)
}
