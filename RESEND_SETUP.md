# Environment Variables for Resend Email Service

## Required Environment Variables

Add these to your `.env.local` file:

```bash
# Resend API Key - Get this from https://resend.com/api-keys
RESEND_API_KEY=your_resend_api_key_here

# Email address to receive contact form submissions
INFO_EMAIL=your-email@example.com

# Optional: Custom sender email address (must be verified in Resend)
# If not provided, defaults to "onboarding@resend.dev"
FROM_EMAIL=noreply@yourdomain.com
```

## Setup Instructions

1. Sign up for a Resend account at https://resend.com
2. Get your API key from the Resend dashboard
3. Add the `RESEND_API_KEY` to your environment variables
4. Set your `INFO_EMAIL` to the email address where you want to receive contact form submissions
5. Optionally, verify a custom domain in Resend and set `FROM_EMAIL` to use your own domain

## Migration from Nodemailer

The email functionality has been migrated from Nodemailer to Resend. The following environment variables are no longer needed:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USERNAME`
- `SMTP_PASSWORD`

These can be removed from your environment configuration.
