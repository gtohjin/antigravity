export default {
  async fetch(request, env, ctx): Promise<Response> {
    return new Response("Antigravity AI 세팅 완료!");
  },
} satisfies ExportedHandler;
