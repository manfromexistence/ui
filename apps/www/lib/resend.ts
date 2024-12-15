/* eslint-disable turbo/no-undeclared-env-vars */
import { Resend } from 'resend';

if (!process.env.RESEND_TOKEN) {
  throw new Error('RESEND_TOKEN environment variable is not set');
}

export const resend = new Resend("re_avaApwwo_3TNzrkJEeEZX7hRC9K9cM4CZ");
