import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN, // allow rquired origins
    credentials: true
}))
app.use(express.json({ limit: "16kb" })) // json
app.use(express.urlencoded({ extended: true, limit: "16kb" })) // eneeded data from url
app.use(express.static("public")) // static data or files

import userRouter from './routes/user.routes.js'
import videoRouter from './routes/video.routes.js'
import playlistRouter from './routes/playlist.routes.js'

app.use('/api/v1/users',userRouter)
app.use('/api/v1/videos',videoRouter)
app.use('/api/v1/playlists',playlistRouter)

export { app }