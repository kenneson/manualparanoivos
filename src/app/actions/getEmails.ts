'use server';

import { supabase } from '@/lib/supabaseClient';

interface User {
    email: string;
    name: string;
}

export async function getEmails(): Promise<User[]> {
    const { data, error } = await supabase
        .from('Lead')
        .select('email, name'); // Busca email e nome

    if (error) {
        console.error('Erro ao buscar emails:', error);
        return [];
    }

    if (!data) {
        return [];
    }

    return data as User[];
}