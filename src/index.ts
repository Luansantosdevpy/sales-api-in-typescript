import express from 'express'
import { AppDataSourse } from './infrastructure/data/config/dataSource'
import { userRoutes } from './app/routes/user/userRouter'

AppDataSourse.initialize().then(async () => {
	const app = express()

	app.use(express.json())

	return app.listen(process.env.PORT, function () {
        console.log(`listening on port ${process.env.PORT}!`);
      })
})