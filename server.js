import { fastify } from 'fastify'
/* import { DatabaseMemory } from './database-memory.js'
 */
import { DatabasePostgres } from './database-postgres.js'


const server = fastify()


const database = new DatabasePostgres()

server.post('/videos', async (request, response) => {
    const { title, description, duration } = request.body

    await database.create({
        title,
        description,
        duration,
    })


    return response.status(201).send()
})

server.get('/videos', async (request, response) => {
    const search = request.query.search


    const videos = await database.list(search)

    return videos
})

server.put('/videos/:id', (request, response) => {
    const videoId = request.params.id

    const { title, description, duration } = request.body

    database.update(videoId, {
        title,
        description,
        duration
    })
    return response.status(204).send
})

server.delete('/videos/:id', (request, response) => {
    const videoId = request.params.id
    database.delete(videoId)

    return response.status(204).send
})

server.listen({
    port: 3333,
})