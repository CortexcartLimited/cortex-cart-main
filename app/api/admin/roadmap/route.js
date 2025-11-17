import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { verifyAdminSession } from '@/lib/admin-auth'; // Make sure this import is here

// Handles creating a new roadmap feature
export async function POST(req) {
    const adminSession = await verifyAdminSession();
    if (!adminSession) {
        return new NextResponse(JSON.stringify({ message: "Not Authenticated" }), { status: 401 });
    }
    try {
        const body = await req.json();
        const { name, description, status } = body;

        // This is the missing 'if' statement that caused the error.
        if (!name || !description || !status) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // Use a direct SQL INSERT query
        await db.query(
            'INSERT INTO roadmap_features (name, description, status) VALUES (?, ?, ?)',
            [name, description, status]
        );

        return NextResponse.json({ message: 'Feature created successfully' }, { status: 201 });

    } catch (error) {
        console.error('[ROADMAP_POST_ERROR]', error);
        return new NextResponse(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
    }
}

// Handles fetching all roadmap features
export async function GET() {
    const adminSession = await verifyAdminSession();
    if (!adminSession) {
        return new NextResponse(JSON.stringify({ message: "Not Authenticated" }), { status: 401 });
    }
    try {
        const [features] = await db.query('SELECT * FROM roadmap_features ORDER BY sort_order ASC');
        return NextResponse.json(features);
    } catch (error) {
        console.error('[ROADMAP_GET_ERROR]', error);
        return new NextResponse(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
    }
}