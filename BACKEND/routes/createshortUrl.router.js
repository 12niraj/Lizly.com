import express from 'express'
import createurlConroller from '../controller/createShorturl.control.js'

const createShorturl = express.Router()


createShorturl.post("/",createurlConroller)

export default createShorturl