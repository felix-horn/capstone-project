export default function saveLocally(key, data) {
  const jsonString = JSON.stringify(data)
  localStorage.setItem(key, jsonString)
}
