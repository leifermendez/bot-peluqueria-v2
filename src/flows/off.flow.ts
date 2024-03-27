import { addKeyword } from "@bot-whatsapp/bot";


const flowOff = addKeyword('botmute')
.addAction(async (_, { globalState, endFlow }) => {
    const botOffForEveryOne = globalState.get<boolean>('botOffForEveryOne') ?? false
    await globalState.update({botOffForEveryOne:!botOffForEveryOne})
    if(botOffForEveryOne) return endFlow()
})

export {flowOff}