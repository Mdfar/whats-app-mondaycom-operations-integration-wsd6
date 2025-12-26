// Custom Logic for filtering and data cleaning before Monday.com insertion const axios = require('axios');

async function processWhatsAppMessage(messageData) { const text = messageData.body;

// Filter out noise: Only process messages with #do or longer than 10 words
if (!text.includes('#do') && text.split(' ').length < 10) {
    return { action: 'ignore', reason: 'noise' };
}

// Clean text for Monday.com Pulse Name
const cleanName = text.replace('#do', '').substring(0, 100).trim();

return {
    action: 'create_task',
    title: cleanName,
    raw_transcript: text,
    timestamp: new Date().toISOString()
};


}

module.exports = { processWhatsAppMessage };