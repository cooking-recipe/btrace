export const extractedVkId = window.location.search.slice(1).split('&')
  .find((item) => item.startsWith('vk_user_id'))?.split('=')[1];