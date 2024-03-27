import { EVENTS, addKeyword } from "@bot-whatsapp/bot";
import conversationalLayer from "src/layers/conversational.layer";
import mainLayer from "src/layers/main.layer";
import muteLayer from "src/layers/mute.layer";

/**
 * Este flow responde a cualquier palabra que escriban
 */
export default addKeyword(EVENTS.WELCOME)
    .addAction(muteLayer)
    .addAction(conversationalLayer)
    .addAction(mainLayer)