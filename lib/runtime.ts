export function createAgent(name: string) {
  return {
    id: crypto.randomUUID(),
    name,
    status: "idle"
  };
}
