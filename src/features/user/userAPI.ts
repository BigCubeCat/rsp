// A mock function to mimic making an async request for data
export function fetchUser(name = "guest") {
  return new Promise<{ data: string }>((resolve) =>
    setTimeout(() => resolve({ data: name }), 500)
  );
}
