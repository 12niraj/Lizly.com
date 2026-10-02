import { nanoid } from 'nanoid';
import express from 'express'

const generateNanoid=(length)=>{
   return nanoid(length)
}
export default generateNanoid;