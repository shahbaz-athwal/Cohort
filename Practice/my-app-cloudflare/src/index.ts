export interface Env {

}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext) {
			return Response.json({
				message: "you sent a get request"
			});
	},
};