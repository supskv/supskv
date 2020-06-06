import _ from "lodash"
import level from "level"
import config from "@config/database"

const db = level(config.DB_NAME)
const key = "users"

export const clear = async () => db.clear()

export const save = async (userId) => {
  try {
    let users = await firstOrNew()

    if (!users.includes(userId)) {
      users.push(userId)
      await db.put(key, users)
      return true
    }

    return false
  } catch (e) {
    return false
  }
}

export const del = async (userId) => {
  try {
    let users = await firstOrNew()

    if (users.includes(userId)) {
      users = users.filter((x) => x !== userId)

      if (users.length) await db.put(key, users)
      else await db.del(key)

      return true
    }

    return false
  } catch (e) {
    return false
  }
}

export const firstOrNew = async () => {
  try {
    const value = await db.get(key)
    return value.split(",")
  } catch (e) {
    return []
  }
}
