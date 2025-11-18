import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { verifyAdminSession } from '@/lib/admin-auth'; // Import this

export async function POST(req) {
    // Add this check
    const session = await verifyAdminSession();
    if (!session) {
        return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }

    try {
        const body = await req.json();
        const { name, description, status } = body;
        if (!name || !description || !status) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }
        await db.query(
            'INSERT INTO roadmap_features (name, description, status) VALUES (?, ?, ?)',
            [name, description, status]
        );
        return NextResponse.json({ message: 'Feature created successfully' }, { status: 201 });
    } catch (error) {
        console.error('[ROADMAP_POST_ERROR]', error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function GET() {
    // Add this check
    const session = await verifyAdminSession();
    if (!session) {
        return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }

    try {
        const [features] = await db.query('SELECT * FROM roadmap_features ORDER BY sort_order ASC');
        return NextResponse.json(features);
    } catch (error) {
        console.error('[ROADMAP_GET_ERROR]', error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}