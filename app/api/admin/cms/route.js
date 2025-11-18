import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { verifyAdminSession } from '@/lib/admin-auth'; // Import this

export async function GET() {
    // Add this check
    const session = await verifyAdminSession();
    if (!session) {
        return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }

    try {
        const [rows] = await db.query('SELECT `content_key`, `content_value` FROM cms_content');
        const contentObject = rows.reduce((acc, row) => {
            acc[row.content_key] = row.content_value;
            return acc;
        }, {});
        return NextResponse.json(contentObject);
    } catch (error) {
        console.error('[CMS_GET_ERROR]', error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(req) {
    // Add this check
    const session = await verifyAdminSession();
    if (!session) {
        return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }

    try {
        const { key, value } = await req.json();
        if (!key) return NextResponse.json({ message: '"key" is a required field' }, { status: 400 });

        const query = 'INSERT INTO cms_content (`content_key`, `content_value`) VALUES (?, ?) ON DUPLICATE KEY UPDATE `content_value` = ?';
        await db.query(query, [key, value, value]);

        return NextResponse.json({ message: 'Content updated successfully' }, { status: 200 });
    } catch (error) {
        console.error('[CMS_POST_ERROR]', error);
        return NextResponse.json({ message: "Internal Server Error" }), { status: 500 };
    }
}