import { createUnsubscribeHandlers } from '../../../../lib/freebies-unsubscribe.mjs';

export const runtime = 'nodejs';
const handlers = createUnsubscribeHandlers();
export const GET = handlers.GET;
export const POST = handlers.POST;
