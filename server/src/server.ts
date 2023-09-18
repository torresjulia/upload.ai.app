import { fastify } from 'fastify'; 
import { fastifyCors } from '@fastify/cors';
import { getAllPrompsRoute } from './routes/get-all-prompts';
import { upLoadVideoRoute } from './routes/upload-video';
import { createTranscriptionRoutes } from './routes/create-transcription';
import { generateAICompletionRoute } from './routes/generate-ai-completion';

const app = fastify(); 

app.register(fastifyCors, {
    origin: '*',
})

app.register(getAllPrompsRoute); 
app.register(upLoadVideoRoute); 
app.register(createTranscriptionRoutes); 
app.register(generateAICompletionRoute); 

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server Running!')
})