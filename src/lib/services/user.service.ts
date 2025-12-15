// src/services/user.service.ts
import { UpsertUserPayload, BackendUser } from "@/lib/types/user";

export async function upsertUser(payload: UpsertUserPayload) {
  const response = await fetch('http://localhost:3000/user/upsert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    console.error('Erro do backend:', response.status, data);
    throw new Error(data?.message ?? 'Erro ao salvar usuário');
  }

  return data;
}

export async function getUserByClerkId(
  clerkId: string
): Promise<BackendUser | null> {
  const res = await fetch(`http://localhost:3000/user/by-clerk/${clerkId}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}
