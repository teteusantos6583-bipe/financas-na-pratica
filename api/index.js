import worker from '../worker.js';

export default async function handler(request) {
  return worker.fetch(request);
}
