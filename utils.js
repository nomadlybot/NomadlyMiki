const DEVELOPER_CHAT_ID = 5729797630;
const ADMIN_CHAT_ID = 5729797630;

function isValidUrl(url) {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  return urlRegex.test(url);
}

function isNormalUser(chatId) {
  // Implement logic to determine if the user is a normal user
  // Return true if the user is a normal user, false otherwise
  return !isAdmin(chatId) && !isDeveloper(chatId);
}

// Stubbed function for demonstration purposes
function isDeveloper(chatId) {
  // Implement logic to determine if the user is a developer
  // Return true if the user is a developer, false otherwise
  return chatId === DEVELOPER_CHAT_ID; // Replace with the actual developer's chat ID
}
// Stubbed function for demonstration purposes
function isAdmin(chatId) {
  // Implement logic to determine if the user is the admin
  // Return true if the user is the admin, false otherwise
  return chatId === ADMIN_CHAT_ID; // Replace with the actual admin's chat ID
}

module.exports = {
  isValidUrl,
  isNormalUser,
  isDeveloper,
  isAdmin,
};
