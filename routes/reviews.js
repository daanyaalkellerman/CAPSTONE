import express from 'express';
import revControl from '../controller/review.js'

const router = express.Router()

router.route('/')

.get(revControl.getRevs)
.post(revControl.addRev)

router.route('/:revID')

.get(revControl.getRev)
.patch(revControl.editRev)
.delete(revControl.deleteRev)

export default router