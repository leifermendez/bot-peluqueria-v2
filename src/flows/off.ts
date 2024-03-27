import { EVENTS, addKeyword } from "@bot-whatsapp/bot";
import conversationalLayer from "src/layers/conversational.layer";
import mainLayer from "src/layers/main.layer";

/**
 * Este flow responde a cualquier palabra que escriban
 */
export default addKeyword('botmute')
.addAction(async (_, { globalState, endFlow }) => {
    const botOffForEveryOne = globalState.get<boolean>('botOffForEveryOne')
    await globalState.update({botOffForEveryOne:!botOffForEveryOne})
    if(botOffForEveryOne) return endFlow()
})
.addAnswer('Hello!')