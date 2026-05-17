import { Resend } from 'resend';

const SUBJECT_LINE = 'New Website Enquiry — Céire Dunne Interiors';
const DEFAULT_RECIPIENT = 'ceiredunneinteriors@gmail.com';

const validateFormData = (data) => {
    const requiredFields = ['name', 'email', 'projectType', 'message'];

    for (const field of requiredFields) {
        if (!data[field] || !String(data[field]).trim()) {
            return { valid: false, error: `Missing required field: ${field}` };
        }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return { valid: false, error: 'Invalid email format' };
    }

    return { valid: true };
};

const escapeHtml = (text) => {
    if (!text) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
};

const formatEmailBody = (data) => {
    const submittedAt = new Date().toLocaleString('en-IE', { timeZone: 'Europe/Dublin' });

    return `
    <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 700px; margin: 0 auto; background: #f5f0e8; padding: 30px;">
        <h2 style="color: #3f3933; border-bottom: 2px solid #7f8f7a; padding-bottom: 10px; font-family: 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.02em;">
            New Website Enquiry
        </h2>

        <div style="background: #fbf8f2; padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid #d6c8b7;">
            <h3 style="color: #3f3933; margin-top: 0; font-family: 'Cormorant Garamond', Georgia, serif;">Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #6d665f; width: 38%;">Name:</td><td style="padding: 8px 0; font-weight: bold; color: #3f3933;">${escapeHtml(data.name)}</td></tr>
                <tr><td style="padding: 8px 0; color: #6d665f;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #6d665f;">Phone:</td><td style="padding: 8px 0; color: #3f3933;">${escapeHtml(data.phone || 'Not provided')}</td></tr>
                <tr><td style="padding: 8px 0; color: #6d665f;">Project Type:</td><td style="padding: 8px 0; font-weight: bold; color: #3f3933;">${escapeHtml(data.projectType)}</td></tr>
            </table>
        </div>

        <div style="background: #fbf8f2; padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid #d6c8b7;">
            <h3 style="color: #3f3933; margin-top: 0; font-family: 'Cormorant Garamond', Georgia, serif;">Message / Project Details</h3>
            <p style="margin: 0; color: #4a443f; line-height: 1.7;">${escapeHtml(data.message).replace(/\n/g, '<br />')}</p>
        </div>

        <div style="background: #efe7dc; padding: 15px; border-radius: 10px; border-left: 4px solid #7f8f7a;">
            <p style="margin: 0; font-size: 13px; color: #5d5650;">
                Submitted: ${escapeHtml(submittedAt)}<br>
                Source: ${escapeHtml(data.page_url || '')}
            </p>
        </div>
    </div>
    `;
};

const formatPlainTextBody = (data) => {
    const submittedAt = new Date().toLocaleString('en-IE', { timeZone: 'Europe/Dublin' });

    return [
        'New Website Enquiry — Céire Dunne Interiors',
        '',
        `Name: ${String(data.name || '').trim()}`,
        `Email: ${String(data.email || '').trim()}`,
        `Phone: ${String(data.phone || 'Not provided').trim()}`,
        `Project Type: ${String(data.projectType || '').trim()}`,
        '',
        'Message / Project Details:',
        String(data.message || '').trim(),
        '',
        `Submitted: ${submittedAt}`,
        `Source: ${String(data.page_url || '').trim()}`
    ].join('\n');
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const data = req.body || {};

        if (data.website) {
            return res.status(200).json({ success: true });
        }

        const validation = validateFormData(data);
        if (!validation.valid) {
            return res.status(400).json({ success: false, error: validation.error });
        }

        if (!process.env.RESEND_API_KEY) {
            return res.status(500).json({
                success: false,
                error: 'Server email is not configured. Please add RESEND_API_KEY.'
            });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const result = await resend.emails.send({
            from: process.env.EMAIL_FROM || 'Céire Dunne Interiors <onboarding@resend.dev>',
            to: [process.env.INTERIOR_FORM_RECIPIENT_EMAIL || DEFAULT_RECIPIENT],
            subject: SUBJECT_LINE,
            html: formatEmailBody(data)
        });

        if (result.error) {
            throw new Error(result.error.message || 'Resend delivery failed');
        }

        return res.status(200).json({
            success: true,
            message: 'Thank you. Your enquiry has been sent and we will be in touch shortly.'
        });
    } catch (error) {
        const errorMessage = error?.message || 'Unknown error';

        if (errorMessage.includes('verify a domain') || errorMessage.includes('domain is not verified') || errorMessage.includes('verify your domain')) {
            console.error('Interior contact submission blocked: sender domain not yet verified in Resend.');
            return res.status(503).json({
                success: false,
                error: 'Enquiry delivery is being activated. Please email ceiredunneinteriors@gmail.com directly for now.'
            });
        }

        console.error('Interior contact submission error:', errorMessage);
        return res.status(500).json({
            success: false,
            error: 'Unable to process submission. Please try again.'
        });
    }
}