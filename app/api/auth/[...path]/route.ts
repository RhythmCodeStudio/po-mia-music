// app/api/auth/[...path]/route.ts
import { auth } from '@/auth/server';

export const { GET, POST } = auth.handler();