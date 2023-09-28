import figlet from "figlet";

const server = Bun.serve({
  fetch() {
    const body = figlet.textSync("Daniel Raban");
    return new Response(body);
    return new Response("Bun!");
  },
  port: 3000,
});
