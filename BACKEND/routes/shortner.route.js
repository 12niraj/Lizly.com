
import express from 'express'
import shortController from '../controller/Directshotner.control.js'


const shotnerRouter= express.Router()

shotnerRouter.get("/:id", shortController)
export default shotnerRouter